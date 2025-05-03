
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function BirthdayPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-8">
      <header className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground bg-primary/80 py-3 px-6 rounded-lg inline-block shadow-md mb-2">
          Happy Birthday, My Love!
        </h1>
        <p className="text-lg text-muted-foreground italic">Celebrating You Today</p>
      </header>

      <main className="flex-grow flex flex-col items-center gap-16">

        {/* My Love For You Section - REVISED WITH DESCRIPTIONS */}
        <section className="w-full max-w-5xl fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-heading font-semibold text-center mb-8 flex items-center justify-center gap-3 text-primary-foreground">
            <Heart className="text-accent w-7 h-7 fill-current" /> {/* Added fill */}
            My Love For You...
            <Heart className="text-accent w-7 h-7 fill-current" /> {/* Added fill */}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card for "I" */}
            <Card className="overflow-hidden shadow-lg border-accent border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-4 flex flex-col items-center text-center flex-grow">
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden border-2 border-primary/50 shadow-inner">
                  <Image
                    data-ai-hint="Beautiful thoughtful woman looking sideways"
                    src="https://picsum.photos/300/300?random=11"
                    alt="Moment I - Represents Her Intelligence/Insight"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                 <p className="text-6xl font-heading font-bold text-primary mt-auto mb-2">I</p> {/* Adjusted margin */}
                 <CardDescription className="text-muted-foreground text-sm mt-2">
                  ... admire your brilliant mind and insightful perspective. You see the world in such a unique and beautiful way.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card for "LOVE" */}
            <Card className="overflow-hidden shadow-lg border-accent border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-4 flex flex-col items-center text-center flex-grow">
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden border-2 border-primary/50 shadow-inner">
                  <Image
                    data-ai-hint="Woman laughing heartily outdoors sunlight"
                    src="https://picsum.photos/300/300?random=12"
                    alt="Moment LOVE - Represents Her Joy/Laughter"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                 <p className="text-6xl font-heading font-bold text-primary mt-auto mb-2">LOVE</p> {/* Adjusted margin */}
                 <CardDescription className="text-muted-foreground text-sm mt-2">
                  ... your infectious laughter and the way you find joy in the little things. Your happiness brightens my world.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card for "YOU" */}
            <Card className="overflow-hidden shadow-lg border-accent border-dashed border bg-card/50 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-4 flex flex-col items-center text-center flex-grow">
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden border-2 border-primary/50 shadow-inner">
                  <Image
                    data-ai-hint="Woman showing kindness helping hand reaching out"
                    src="https://picsum.photos/300/300?random=13"
                    alt="Moment YOU - Represents Her Kindness/Compassion"
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                 <p className="text-6xl font-heading font-bold text-primary mt-auto mb-2">YOU</p> {/* Adjusted margin */}
                 <CardDescription className="text-muted-foreground text-sm mt-2">
                  ... and your incredibly kind heart. Your compassion and empathy inspire me every single day.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
             <Heart className="w-16 h-16 text-accent fill-current inline-block animate-pulse" />
          </div>
           <p className="text-center text-sm text-muted-foreground mt-2 italic">...more than words can say.</p>
        </section>

        <Separator className="my-8 bg-accent/50 w-3/4 mx-auto" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-3xl fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card border-accent shadow-xl overflow-hidden border-2 border-dashed p-1">
             <div className="border border-primary rounded-lg p-4 md:p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="text-accent w-6 h-6" />
                    A Special Message For You
                    <Gift className="text-accent w-6 h-6" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">From my heart to yours</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-6">
                  <div className="w-full md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-4 border-primary/50">
                    <Image
                      data-ai-hint="romantic couple portrait soft light"
                      src="https://picsum.photos/400/400?random=100"
                      alt="Special birthday photo"
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto md:h-full aspect-square"
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
        <p>Made with Love <Heart className="inline w-4 h-4 text-accent fill-current" /></p>
      </footer>
    </div>
  );
}
