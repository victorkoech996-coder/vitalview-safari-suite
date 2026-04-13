import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useSavedTours } from "@/hooks/useSavedTours";
import { Button } from "@/components/ui/button";
import { LogOut, Heart, MapPin, Clock, Trash2, ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const { user, displayName, signOut, loading: authLoading } = useAuth();
  const { savedTours, loading: toursLoading, removeTour } = useSavedTours();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) navigate("/login");
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gold-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <div>
            <Link to="/" className="text-earth/70 hover:text-earth text-sm flex items-center gap-1 mb-2">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-earth">
              Welcome, {displayName || "Explorer"}! 🌍
            </h1>
            <p className="text-earth/70 mt-1">Your safari adventure dashboard</p>
          </div>
          <Button
            variant="outline"
            onClick={async () => { await signOut(); navigate("/"); }}
            className="border-earth/30 text-earth hover:bg-earth/10"
          >
            <LogOut size={16} /> Sign Out
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center">
            <Heart className="mx-auto text-destructive mb-2" size={28} />
            <p className="text-2xl font-bold text-foreground">{savedTours.length}</p>
            <p className="text-muted-foreground text-sm">Saved Tours</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center">
            <MapPin className="mx-auto text-safari-green mb-2" size={28} />
            <p className="text-2xl font-bold text-foreground">0</p>
            <p className="text-muted-foreground text-sm">Bookings</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center">
            <Clock className="mx-auto text-gold-dark mb-2" size={28} />
            <p className="text-2xl font-bold text-foreground">—</p>
            <p className="text-muted-foreground text-sm">Next Trip</p>
          </div>
        </div>

        {/* Saved Tours */}
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Heart size={20} className="text-destructive" /> Saved Tours
          </h2>

          {toursLoading ? (
            <p className="text-muted-foreground">Loading saved tours...</p>
          ) : savedTours.length === 0 ? (
            <div className="bg-card rounded-xl p-10 border border-border text-center">
              <Heart size={40} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground mb-4">You haven't saved any tours yet.</p>
              <Link to="/#tours">
                <Button className="gold-gradient text-earth font-semibold hover:opacity-90">
                  Browse Tours
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedTours.map((tour) => (
                <div key={tour.id} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm group hover:shadow-lg transition-shadow">
                  {tour.tour_image && (
                    <div className="relative h-44 overflow-hidden">
                      <img src={tour.tour_image} alt={tour.tour_title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      {tour.tour_days && (
                        <span className="absolute top-3 right-3 bg-earth/80 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <Clock size={12} /> {tour.tour_days}
                        </span>
                      )}
                      {tour.tour_destination && (
                        <span className="absolute top-3 left-3 bg-safari-green/90 backdrop-blur-sm text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {tour.tour_destination}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{tour.tour_title}</h3>
                    {tour.tour_description && (
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{tour.tour_description}</p>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTour(tour.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 size={14} /> Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
