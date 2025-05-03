import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

export default function BirthdayPage() {
  // Placeholder images array
  const collageImages = [
    { src: 'https://picsum.photos/300/300?random=1', alt: 'Cherished moment 1', hint: 'couple smiling' },
    { src: 'https://picsum.photos/300/300?random=2', alt: 'Cherished moment 2', hint: 'sunset beach' },
    { src: 'https://picsum.photos/300/300?random=3', alt: 'Cherished moment 3', hint: 'laughing friends' },
    { src: 'https://picsum.photos/300/300?random=4', alt: 'Cherished moment 4', hint: 'city lights' },
    { src: 'https://picsum.photos/300/300?random=5', alt: 'Cherished moment 5', hint: 'nature walk' },
    { src: 'https://picsum.photos/300/300?random=6', alt: 'Cherished moment 6', hint: 'cozy home' },
    { src: 'https://picsum.photos/300/300?random=7', alt: 'Cherished moment 7', hint: 'celebration cake' },
    { src: 'https://picsum.photos/300/300?random=8', alt: 'Cherished moment 8', hint: 'travel adventure' },
    { src: 'https://picsum.photos/300/300?random=9', alt: 'Cherished moment 9', hint: 'pet cuddle' },
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
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="text-accent w-7 h-7" />
            Our Cherished Moments
            <Heart className="text-accent w-7 h-7" />
          </h2>
          {/* Updated 9-image grid structure for a heart-like shape */}
          <div className="grid grid-cols-3 grid-rows-4 gap-2 md:gap-4 w-full max-w-xl mx-auto aspect-square">
            {/* Row 1: Center Image */}
            <div className="col-start-2 row-start-1 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <Image
                data-ai-hint={collageImages[0].hint}
                src={collageImages[0].src}
                alt={collageImages[0].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Row 2: Full Row */}
            <div className="col-start-1 row-start-2 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[1].hint}
                src={collageImages[1].src}
                alt={collageImages[1].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-start-2 row-start-2 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[2].hint}
                src={collageImages[2].src}
                alt={collageImages[2].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
             <div className="col-start-3 row-start-2 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[3].hint}
                src={collageImages[3].src}
                alt={collageImages[3].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

             {/* Row 3: Full Row */}
             <div className="col-start-1 row-start-3 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[4].hint}
                src={collageImages[4].src}
                alt={collageImages[4].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-start-2 row-start-3 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[5].hint}
                src={collageImages[5].src}
                alt={collageImages[5].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
             <div className="col-start-3 row-start-3 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[6].hint}
                src={collageImages[6].src}
                alt={collageImages[6].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

             {/* Row 4: Outer Images */}
             <div className="col-start-1 row-start-4 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[7].hint}
                src={collageImages[7].src}
                alt={collageImages[7].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
             <div className="col-start-3 row-start-4 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
               <Image
                data-ai-hint={collageImages[8].hint}
                src={collageImages[8].src}
                alt={collageImages[8].alt}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
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
                      src="https://picsum.photos/400/400?random=10" // Specific photo for the message
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
