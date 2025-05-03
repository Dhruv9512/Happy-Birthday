
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift } from 'lucide-react'; // Added Gift icon
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'; // Added ScrollArea components

// Define type for individual memory images
type MemoryImage = {
  src: string;
  alt: string;
  hint: string;
  caption: string;
  priority?: boolean;
};

export default function BirthdayPage() {
  // Array for individual memory photos
  const memoryImages: MemoryImage[] = [
    {
      src: `https://picsum.photos/300/400?random=1`,
      alt: "Memory 1 - Park Fun",
      hint: "happy couple park",
      caption: "That unforgettable day at the park, full of laughter.",
      priority: true,
    },
    {
      src: `https://picsum.photos/300/400?random=2`,
      alt: "Memory 2 - Celebration",
      hint: "birthday cake friends",
      caption: "Celebrating your milestones, surrounded by joy.",
      priority: true,
    },
    {
      src: `https://picsum.photos/300/400?random=3`,
      alt: "Memory 3 - Coffee Date",
      hint: "cozy coffee shop window",
      caption: "Quiet moments and warm coffee shared together.",
      priority: true,
    },
    {
      src: `https://picsum.photos/300/400?random=4`,
      alt: "Memory 4 - Adventure",
      hint: "travel sunset silhouette",
      caption: "Adventures under the beautiful setting sun.",
    },
    {
      src: `https://picsum.photos/300/400?random=5`,
      alt: "Memory 5 - Candid Laughter",
      hint: "laughing couple candid outdoor",
      caption: "Your infectious laughter, the best sound in the world.",
    },
    {
      src: `https://picsum.photos/300/400?random=6`,
      alt: "Memory 6 - Beach Relaxation",
      hint: "beach sunset couple walking",
      caption: "Relaxing walks by the ocean waves.",
    },
      {
      src: `https://picsum.photos/300/400?random=7`,
      alt: "Memory 7 - City Lights",
      hint: "city night view couple",
      caption: "Exploring the city lights hand-in-hand.",
    },
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
        {/* Memory Photos Section */}
        <section className="w-full max-w-5xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <Gift className="text-accent w-7 h-7" />
            Beautiful Memories We've Made
            <Gift className="text-accent w-7 h-7" />
          </h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-accent/30 shadow-inner">
            <div className="flex w-max space-x-4 p-4">
              {memoryImages.map((img, index) => (
                <Card key={index} className="w-[250px] md:w-[280px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-primary/40 hover:border-primary">
                  <CardContent className="p-0">
                    <Image
                      data-ai-hint={img.hint}
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={400}
                      className="object-cover w-full h-[300px] md:h-[350px]" // Consistent height
                      priority={img.priority}
                      sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 280px"
                    />
                  </CardContent>
                  <CardFooter className="p-3 md:p-4 min-h-[60px] flex items-center justify-center bg-card/50 border-t border-accent/20">
                    <p className="text-sm text-center text-foreground/90 italic leading-snug">{img.caption}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="h-2.5"/>
          </ScrollArea>
           <p className="text-center text-sm text-muted-foreground mt-4 italic">Scroll to see more moments...</p>
        </section>

        <Separator className="my-8 bg-accent/50 w-3/4 mx-auto" />

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
                      data-ai-hint="romantic couple portrait soft light" // More specific hint
                      src="https://picsum.photos/400/400?random=100" // Specific photo for the message
                      alt="Special birthday photo"
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto md:h-full aspect-square" // Ensure square aspect ratio
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
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
