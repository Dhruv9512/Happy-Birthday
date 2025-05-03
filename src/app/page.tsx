import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BirthdayPage() {
  // Expanded placeholder images array for a more detailed heart shape (25 images)
  const collageImages = Array.from({ length: 25 }, (_, i) => ({
    src: `https://picsum.photos/200/200?random=${i + 1}`,
    alt: `Cherished moment ${i + 1}`,
    hint: i % 3 === 0 ? 'couple nature' : i % 3 === 1 ? 'friends laughing' : 'city travel',
    // Grid position [row, col]. Using 1-based indexing for clarity.
    // Designed for a 7x7 grid to approximate heart shape.
    position: [
      // Row 1
      [1, 4],
      // Row 2
      [2, 3], [2, 4], [2, 5],
      // Row 3
      [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
      // Row 4
      [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7],
      // Row 5
      [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
      // Row 6
      [6, 3], [6, 4], [6, 5],
      // Row 7
      [7, 4]
    ][i],
     // Add subtle random rotations
    rotation: `rotate(${Math.floor(Math.random() * 7) - 3}deg)` // -3 to +3 degrees
  }));


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
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="text-accent w-7 h-7" />
            Our Cherished Moments
            <Heart className="text-accent w-7 h-7" />
          </h2>
          {/* Updated Grid for Heart Shape */}
          <div className="relative grid grid-cols-7 grid-rows-7 gap-1 md:gap-2 w-full max-w-xl mx-auto aspect-square">
            {collageImages.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-110 hover:z-10"
                style={{
                  gridRowStart: img.position[0],
                  gridColumnStart: img.position[1],
                  transform: img.rotation, // Apply rotation
                }}
              >
                <Image
                  data-ai-hint={img.hint}
                  src={img.src}
                  alt={img.alt}
                  width={200} // Smaller images for more detail
                  height={200}
                  className="object-cover w-full h-full"
                  priority={index < 9} // Prioritize loading first few images
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
