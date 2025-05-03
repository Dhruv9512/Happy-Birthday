
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift, Camera } from 'lucide-react'; // Added Camera icon, kept Heart and Gift
import { cn } from '@/lib/utils';

// Define type for individual memory images - REPURPOSED FOR I LOVE YOU SECTION
type LoveLetterImage = {
  src: string;
  alt: string;
  hint: string;
  gridClass: string; // Class for grid placement
};

export default function BirthdayPage() {
  // Array for images used in the "I LOVE YOU" grid
  // Need 8 images for I L O V E Y O U
  const loveLetterImages: LoveLetterImage[] = [
    // I (1 image)
    {
      src: `https://picsum.photos/300/400?random=1`,
      alt: "Memory 'I'",
      hint: "happy couple smile",
      gridClass: "col-start-2 row-start-1 row-span-2", // Position for 'I'
    },
    // L (2 images)
    {
      src: `https://picsum.photos/300/300?random=2`,
      alt: "Memory 'L' top",
      hint: "holding hands close",
      gridClass: "col-start-4 row-start-1", // Position for 'L' top
    },
    {
      src: `https://picsum.photos/300/300?random=3`,
      alt: "Memory 'L' bottom",
      hint: "walking together sunset",
      gridClass: "col-start-4 row-start-2", // Position for 'L' bottom
    },
     // O (placeholder/gap) - Handled by grid layout

    // V (2 images)
     {
      src: `https://picsum.photos/300/300?random=4`,
      alt: "Memory 'V' left",
      hint: "candid laughing outdoor",
      gridClass: "col-start-6 row-start-1", // Position for 'V' left
    },
     {
      src: `https://picsum.photos/300/300?random=5`,
      alt: "Memory 'V' right",
      hint: "picnic park blanket",
      gridClass: "col-start-7 row-start-1", // Position for 'V' right
    },
    // E (3 images) - Simplified E
     {
      src: `https://picsum.photos/300/300?random=6`,
      alt: "Memory 'E' left",
      hint: "cozy coffee shop window",
      gridClass: "col-start-9 row-start-1 row-span-2", // Position for 'E' vertical bar
    },
     {
      src: `https://picsum.photos/300/300?random=7`,
      alt: "Memory 'E' top",
      hint: "watching movie couch",
      gridClass: "col-start-10 row-start-1", // Position for 'E' top bar
    },
     {
      src: `https://picsum.photos/300/300?random=8`,
      alt: "Memory 'E' bottom",
      hint: "cooking together kitchen",
      gridClass: "col-start-10 row-start-2", // Position for 'E' bottom bar
    },
     // Y O U will be text
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

        {/* I LOVE YOU Section */}
        <section className="w-full max-w-6xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3 text-primary-foreground">
            <Camera className="text-accent w-7 h-7" />
             A Special Arrangement... Just For You
            <Camera className="text-accent w-7 h-7" />
          </h2>
          <div className="grid grid-cols-12 grid-rows-2 gap-2 md:gap-4 items-center justify-center p-4 rounded-lg border-2 border-dashed border-accent bg-card/30 shadow-inner">
            {/* Images forming letters */}
            {loveLetterImages.map((img, index) => (
              <div key={index} className={cn("relative aspect-square w-full h-full overflow-hidden rounded-md shadow-md hover:shadow-xl transition-all duration-300", img.gridClass)}>
                <Image
                  data-ai-hint={img.hint}
                  src={img.src}
                  alt={img.alt}
                  fill // Use fill and object-cover for responsive images within grid cells
                  sizes="(max-width: 768px) 15vw, 10vw" // Adjust sizes based on grid
                  className="object-cover"
                />
              </div>
            ))}

            {/* Text for YOU */}
             {/* Y */}
             <div className="col-start-2 col-span-1 row-start-3 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-heading text-primary font-bold">Y</span>
             </div>
             {/* O */}
              <div className="col-start-4 col-span-1 row-start-3 flex items-center justify-center">
                 <span className="text-4xl md:text-6xl font-heading text-primary font-bold">O</span>
             </div>
             {/* U */}
             <div className="col-start-6 col-span-1 row-start-3 flex items-center justify-center">
                 <span className="text-4xl md:text-6xl font-heading text-primary font-bold">U</span>
             </div>
              {/* Heart Symbol - Can be placed centrally or creatively */}
             <div className="col-start-8 col-span-1 row-start-3 flex items-center justify-center text-accent">
                 <Heart className="w-12 h-12 md:w-16 md:h-16 fill-current" />
             </div>
          </div>
           <p className="text-center text-sm text-muted-foreground mt-4 italic">...spells out how much I adore you!</p>
        </section>

        <Separator className="my-8 bg-accent/50 w-3/4 mx-auto" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card border-accent shadow-xl overflow-hidden border-2 border-dashed p-1">
             <div className="border border-primary rounded-lg p-4 md:p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="text-accent w-6 h-6" /> {/* Changed icon back to Gift */}
                    A Special Message For You
                    <Gift className="text-accent w-6 h-6" /> {/* Changed icon back to Gift */}
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
        <p>Made with Love <Heart className="inline w-4 h-4 text-accent fill-current" /></p> {/* Added fill */}
      </footer>
    </div>
  );
}
