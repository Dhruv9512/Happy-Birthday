
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define type for image data including position and rotation
type CollageImage = {
  src: string;
  alt: string;
  hint: string;
  style: React.CSSProperties;
  priority?: boolean;
};

// Define type for light position
type LightPosition = {
  style: React.CSSProperties;
};

export default function BirthdayPage() {
  // Image positions and rotations refined for a clearer heart shape based on reference
  const imageStyles: React.CSSProperties[] = [
    // Row 1 (Top Peak)
    { top: '0%', left: '40%', width: '20%', transform: 'rotate(-3deg)', zIndex: 5 },

    // Row 2
    { top: '10%', left: '25%', width: '22%', transform: 'rotate(4deg)', zIndex: 4 },
    { top: '10%', left: '53%', width: '22%', transform: 'rotate(-5deg)', zIndex: 4 },

    // Row 3
    { top: '22%', left: '12%', width: '24%', transform: 'rotate(-6deg)', zIndex: 3 },
    { top: '20%', left: '38%', width: '24%', transform: 'rotate(2deg)', zIndex: 6 }, // Central overlap
    { top: '22%', left: '64%', width: '24%', transform: 'rotate(5deg)', zIndex: 3 },

    // Row 4
    { top: '38%', left: '3%', width: '26%', transform: 'rotate(7deg)', zIndex: 2 },
    { top: '35%', left: '29%', width: '22%', transform: 'rotate(-4deg)', zIndex: 7 },
    { top: '35%', left: '51%', width: '22%', transform: 'rotate(3deg)', zIndex: 7 },
    { top: '38%', left: '71%', width: '26%', transform: 'rotate(-8deg)', zIndex: 2 },

     // Row 5 (Middle Bulge)
    { top: '52%', left: '15%', width: '24%', transform: 'rotate(-5deg)', zIndex: 8 },
    { top: '48%', left: '39%', width: '22%', transform: 'rotate(0deg)', zIndex: 9 }, // Central point
    { top: '52%', left: '61%', width: '24%', transform: 'rotate(6deg)', zIndex: 8 },

    // Row 6 (Tapering down)
    { top: '65%', left: '28%', width: '20%', transform: 'rotate(4deg)', zIndex: 10 },
    { top: '65%', left: '52%', width: '20%', transform: 'rotate(-3deg)', zIndex: 10 },

    // Row 7 (Bottom Point)
    { top: '78%', left: '40%', width: '20%', transform: 'rotate(2deg)', zIndex: 11 },

    // Fillers (Adjusted for better density and shape)
    { top: '18%', left: '6%', width: '16%', transform: 'rotate(10deg)', zIndex: 1 }, // Upper left gap filler
    { top: '18%', left: '78%', width: '16%', transform: 'rotate(-9deg)', zIndex: 1 }, // Upper right gap filler
    { top: '58%', left: '4%', width: '18%', transform: 'rotate(8deg)', zIndex: 7 }, // Mid-left side filler
    { top: '58%', left: '78%', width: '18%', transform: 'rotate(-7deg)', zIndex: 7 }, // Mid-right side filler
    { top: '72%', left: '20%', width: '15%', transform: 'rotate(-6deg)', zIndex: 9 }, // Lower left gap filler
    { top: '72%', left: '65%', width: '15%', transform: 'rotate(5deg)', zIndex: 9 }, // Lower right gap filler
  ];


  const collageImages: CollageImage[] = imageStyles.map((style, i) => ({
    src: `https://picsum.photos/200/200?random=${i + 1}`,
    alt: `Cherished moment ${i + 1}`,
    hint: i % 3 === 0 ? 'couple smile' : i % 3 === 1 ? 'love hug' : 'happy travel',
    style: {
      position: 'absolute',
      ...style,
    },
    priority: i < 9, // Prioritize loading first few images
  }));

  // Refined positions for the string lights to outline the heart shape better
  const lightPositions: LightPosition[] = [
    { style: { top: '-2%', left: '49%' } }, // Top peak area
    { style: { top: '8%', left: '30%' } },  // Upper left curve
    { style: { top: '8%', left: '68%' } },  // Upper right curve
    { style: { top: '20%', left: '15%' } }, // Mid-left curve
    { style: { top: '20%', left: '83%' } }, // Mid-right curve
    { style: { top: '35%', left: '5%' } },  // Outer mid-left bulge
    { style: { top: '35%', left: '93%' } }, // Outer mid-right bulge
    { style: { top: '50%', left: '10%' } }, // Side left lower bulge
    { style: { top: '50%', left: '88%' } }, // Side right lower bulge
    { style: { top: '65%', left: '20%' } }, // Lower-left inward curve start
    { style: { top: '65%', left: '78%' } }, // Lower-right inward curve start
    { style: { top: '78%', left: '30%' } }, // Bottom left point approach
    { style: { top: '78%', left: '68%' } }, // Bottom right point approach
    { style: { top: '88%', left: '49%' } }, // Bottom center point
    // Optional inner lights for depth
    { style: { top: '25%', left: '49%' } }, // Inner top center
    { style: { top: '45%', left: '35%' } }, // Inner left side
    { style: { top: '45%', left: '63%' } }, // Inner right side
    { style: { top: '60%', left: '49%' } }, // Inner bottom center near point
 ];


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground bg-primary/80 py-3 px-6 rounded-lg inline-block shadow-md mb-2">
          Happy Birthday, My Love!
        </h1>
        <p className="text-lg text-muted-foreground italic">Celebrating You Today</p>
      </header>

      <main className="flex-grow flex flex-col items-center gap-16">
        {/* Heart-Shaped Photo Collage Section */}
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.2s' }}> {/* Increased max-width slightly */}
          <h2 className="text-3xl font-heading font-semibold text-center mb-10 flex items-center justify-center gap-2"> {/* Increased margin-bottom */}
            <Heart className="text-accent w-7 h-7" />
            Our Cherished Moments
            <Heart className="text-accent w-7 h-7" />
          </h2>
          {/* Container for Absolute Positioning */}
          <div className="relative w-full aspect-[4/3.5] max-w-xl mx-auto mb-12"> {/* Adjusted aspect ratio for better heart shape */}
             {/* String Lights */}
            {lightPositions.map((light, index) => (
              <div
                key={`light-${index}`}
                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-200 shadow-[0_0_8px_4px_rgba(254,249,195,0.7),0_0_12px_6px_rgba(253,230,138,0.5)] animate-pulse"
                style={{
                  ...light.style,
                  animationDelay: `${Math.random() * 1.5}s`, // Stagger pulse animation
                  zIndex: 0, // Ensure lights are behind photos
                }}
              />
            ))}

            {/* Images */}
            {collageImages.map((img, index) => (
              <div
                key={index}
                className="rounded-md overflow-hidden shadow-lg border-2 border-white/60 transform transition-transform duration-300 hover:scale-105 hover:z-20" // Slightly less opaque border
                style={img.style}
              >
                <Image
                  data-ai-hint={img.hint}
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                  priority={img.priority}
                  sizes="(max-width: 768px) 20vw, 15vw" // Provide sizes for optimization
                />
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8 bg-accent/50" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card border-accent shadow-xl overflow-hidden border-2 border-dashed p-1">
             <div className="border border-primary rounded-lg p-4 md:p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Heart className="text-accent w-6 h-6" />
                    A Special Message For You
                    <Heart className="text-accent w-6 h-6" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">From my heart to yours</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-6">
                  <div className="w-full md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-4 border-primary/50">
                    <Image
                      data-ai-hint="romantic couple portrait"
                      src="https://picsum.photos/400/400?random=100" // Specific photo for the message
                      alt="Special birthday photo"
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto md:h-full"
                      sizes="(max-width: 768px) 90vw, 400px"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p className="text-lg leading-relaxed text-foreground">
                      My dearest, on your special day, I want to remind you how much you mean to me.
                      Every moment with you is a treasure, and my love for you grows stronger each day.
                      You bring so much joy and light into my life.
                      Wishing you a birthday filled with love, laughter, and everything your heart desires.
                    </p>
                    <p className="text-right mt-4 text-accent font-semibold italic">
                      Forever and always, <br />
                      [Your Name] {/* Replace with sender's name */}
                    </p>
                  </div>
                </CardContent>
             </div>
          </Card>
        </section>
      </main>

      <footer className="text-center mt-16 py-4 text-muted-foreground text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>Made with Love <Heart className="inline w-4 h-4 text-accent" /></p>
      </footer>
    </div>
  );
}
