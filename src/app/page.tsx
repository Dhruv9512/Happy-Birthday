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
  // Image positions and rotations for a heart shape using absolute positioning
  // Values are percentages for responsiveness, rotations add dynamism
  // Coordinates are approximate based on the reference image
  const imageStyles: React.CSSProperties[] = [
    // Top Center (Peak)
    { top: '0%', left: '42%', width: '16%', transform: 'rotate(-2deg)', zIndex: 5 },
    // Row 2
    { top: '10%', left: '28%', width: '18%', transform: 'rotate(3deg)', zIndex: 4 },
    { top: '10%', left: '54%', width: '18%', transform: 'rotate(-4deg)', zIndex: 4 },
    // Row 3
    { top: '22%', left: '15%', width: '20%', transform: 'rotate(-5deg)', zIndex: 3 },
    { top: '20%', left: '40%', width: '20%', transform: 'rotate(2deg)', zIndex: 6 }, // Central overlap
    { top: '22%', left: '65%', width: '20%', transform: 'rotate(4deg)', zIndex: 3 },
    // Row 4
    { top: '38%', left: '5%', width: '22%', transform: 'rotate(6deg)', zIndex: 2 },
    { top: '35%', left: '27%', width: '20%', transform: 'rotate(-3deg)', zIndex: 7 },
    { top: '35%', left: '53%', width: '20%', transform: 'rotate(1deg)', zIndex: 7 },
    { top: '38%', left: '73%', width: '22%', transform: 'rotate(-5deg)', zIndex: 2 },
     // Row 5 (More central)
    { top: '50%', left: '18%', width: '20%', transform: 'rotate(-4deg)', zIndex: 8 },
    { top: '48%', left: '40%', width: '20%', transform: 'rotate(0deg)', zIndex: 9 }, // Bottom overlap
    { top: '50%', left: '62%', width: '20%', transform: 'rotate(5deg)', zIndex: 8 },
    // Row 6
    { top: '65%', left: '30%', width: '18%', transform: 'rotate(3deg)', zIndex: 10 },
    { top: '65%', left: '52%', width: '18%', transform: 'rotate(-2deg)', zIndex: 10 },
    // Bottom Point
    { top: '78%', left: '41%', width: '18%', transform: 'rotate(1deg)', zIndex: 11 },
    // Extra smaller images for filling gaps (adjust positions as needed)
    { top: '18%', left: '5%', width: '12%', transform: 'rotate(10deg)', zIndex: 1 },
    { top: '18%', left: '83%', width: '12%', transform: 'rotate(-8deg)', zIndex: 1 },
    { top: '30%', left: '0%', width: '10%', transform: 'rotate(-10deg)', zIndex: 0 },
    { top: '30%', left: '90%', width: '10%', transform: 'rotate(12deg)', zIndex: 0 },
    { top: '55%', left: '5%', width: '13%', transform: 'rotate(8deg)', zIndex: 7 },
    { top: '55%', left: '82%', width: '13%', transform: 'rotate(-6deg)', zIndex: 7 },
    { top: '75%', left: '20%', width: '12%', transform: 'rotate(-7deg)', zIndex: 9 },
    { top: '75%', left: '68%', width: '12%', transform: 'rotate(6deg)', zIndex: 9 },
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

  // Approximate positions for the string lights (percentages)
  const lightPositions: LightPosition[] = [
    { style: { top: '-2%', left: '49%' } }, { style: { top: '5%', left: '35%' } },
    { style: { top: '5%', left: '63%' } }, { style: { top: '15%', left: '22%' } },
    { style: { top: '13%', left: '75%' } }, { style: { top: '28%', left: '10%' } },
    { style: { top: '26%', left: '88%' } }, { style: { top: '42%', left: '2%' } },
    { style: { top: '40%', left: '95%' } }, { style: { top: '55%', left: '12%' } },
    { style: { top: '53%', left: '85%' } }, { style: { top: '68%', left: '25%' } },
    { style: { top: '68%', left: '73%' } }, { style: { top: '80%', left: '35%' } },
    { style: { top: '80%', left: '63%' } }, { style: { top: '90%', left: '48%' } },
    // Lights slightly inside
    { style: { top: '20%', left: '50%' } }, { style: { top: '38%', left: '35%' } },
    { style: { top: '40%', left: '65%' } }, { style: { top: '60%', left: '45%' } },
     { style: { top: '72%', left: '58%' } },
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
        <section className="w-full max-w-2xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="text-accent w-7 h-7" />
            Our Cherished Moments
            <Heart className="text-accent w-7 h-7" />
          </h2>
          {/* Container for Absolute Positioning */}
          <div className="relative w-full aspect-[4/3] max-w-xl mx-auto mb-12"> {/* Adjusted aspect ratio slightly */}
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
                className="rounded-md overflow-hidden shadow-lg border-2 border-white/50 transform transition-transform duration-300 hover:scale-105 hover:z-20" // Added white border like photos
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