
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Gift, Sparkles, PartyPopper, Cake } from 'lucide-react'; // Added more icons
import { cn } from '@/lib/utils';


export default function BirthdayPage() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-primary/10 to-background text-foreground p-4 md:p-8">
      {/* Enhanced Header */}
      <header className="text-center mb-16 mt-8 fade-in relative overflow-hidden py-10 rounded-2xl shadow-inner bg-primary/20 border border-primary/30">
         {/* Decorative elements */}
        <PartyPopper className="absolute top-4 left-4 text-accent w-8 h-8 opacity-70 rotate-[-15deg]" />
        <Sparkles className="absolute top-8 right-12 text-accent w-6 h-6 opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }}/>
        <Cake className="absolute bottom-4 right-4 text-accent w-8 h-8 opacity-70 rotate-[10deg]" />
         <Sparkles className="absolute bottom-8 left-12 text-accent w-6 h-6 opacity-60 animate-pulse" style={{ animationDelay: '0.6s' }}/>


        <h1 className={cn(
          "text-5xl md:text-7xl font-heading font-extrabold text-primary-foreground relative z-10",
          "bg-gradient-to-r from-primary/90 to-accent/90 bg-clip-text text-transparent", // Gradient text
          "py-4 px-6 rounded-xl mb-4 inline-block tracking-wider",
          "drop-shadow-lg" // Added drop shadow for pop
        )}>
          <Gift className="inline-block w-10 h-10 mr-3 text-accent drop-shadow-md" />
          Happy Birthday, My Dearest!
          <Gift className="inline-block w-10 h-10 ml-3 text-accent drop-shadow-md" />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground italic font-medium relative z-10">
          Wishing You the Most Wonderful Day!
        </p>
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-50 z-0"></div> {/* Subtle overlay */}
      </header>

      <main className="flex-grow flex flex-col items-center gap-12 md:gap-16">

        {/* Why You Shine Section - Adjusted Styling */}
        <section className="w-full max-w-6xl fade-in px-4" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-12 flex items-center justify-center gap-4 text-primary-foreground">
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8" />
            What Makes You So Special...
            <Sparkles className="text-accent w-7 h-7 md:w-8 md:h-8" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1: Your Smile */}
            <Card className="group overflow-hidden shadow-lg border-accent/40 border-2 bg-card/70 hover:shadow-2xl transition-all duration-300 flex flex-col rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-[4/3] overflow-hidden"> {/* Aspect ratio adjustment */}
                <Image
                  data-ai-hint="Woman smiling warmly sunlit garden soft focus"
                  src="https://picsum.photos/400/300?random=41"
                  alt="Your Beautiful Smile"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Smile</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                  Your smile brightens even the cloudiest days. It's infectious and fills my heart with warmth and happiness.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2: Your Strength */}
            <Card className="group overflow-hidden shadow-lg border-accent/40 border-2 bg-card/70 hover:shadow-2xl transition-all duration-300 flex flex-col rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  data-ai-hint="Woman standing confidently mountain peak sunrise silhouette"
                  src="https://picsum.photos/400/300?random=42"
                  alt="Your Inner Strength"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Strength</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                  I admire your resilience and unwavering strength. You face challenges with grace and inspire me every single day.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3: Your Passion */}
            <Card className="group overflow-hidden shadow-lg border-accent/40 border-2 bg-card/70 hover:shadow-2xl transition-all duration-300 flex flex-col rounded-xl backdrop-blur-sm">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  data-ai-hint="Artist painting passionately colorful canvas focused expression"
                  src="https://picsum.photos/400/300?random=43"
                  alt="Your Passionate Spirit"
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <CardTitle className="absolute bottom-3 left-4 text-2xl md:text-3xl font-semibold text-white drop-shadow-lg font-heading">Your Passion</CardTitle>
              </div>
              <CardContent className="p-5 flex-grow">
                <CardDescription className="text-muted-foreground text-base mt-2 leading-relaxed">
                  The way you pursue your passions is captivating. Your dedication and enthusiasm are truly inspiring to witness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
           <div className="text-center mt-10">
             <Heart className="w-10 h-10 text-accent fill-accent/80 inline-block animate-pulse" />
          </div>
           <p className="text-center text-base text-muted-foreground mt-2 italic">...just a few sparks in your constellation.</p>
        </section>

        <Separator className="my-8 bg-accent/30 w-3/4 md:w-1/2 mx-auto rounded-full h-1" />

        {/* Birthday Message Frame Section */}
        <section className="w-full max-w-4xl fade-in px-4" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-card/80 border-primary shadow-xl overflow-hidden border-2 border-dashed p-1 rounded-xl backdrop-blur-sm">
             <div className="border border-accent/50 rounded-lg p-6 md:p-8">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="text-accent w-7 h-7 md:w-8 md:h-8" />
                    A Birthday Wish For You
                    <Gift className="text-accent w-7 h-7 md:w-8 md:h-8" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-3 text-base">From my heart to yours</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 mt-6">
                  <div className="w-full lg:w-5/12 flex-shrink-0 rounded-lg overflow-hidden shadow-md border-4 border-primary/30 aspect-square lg:aspect-auto">
                    <Image
                      data-ai-hint="romantic couple silhouette sunset beach soft light"
                      src="https://picsum.photos/500/500?random=101"
                      alt="A special moment"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                       sizes="(max-width: 1024px) 80vw, 40vw"
                    />
                  </div>
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg md:text-xl leading-relaxed text-foreground">
                      My dearest, on your special day, more than ever, I celebrate the incredible person you are.
                      Every moment with you is a gift, and my admiration for your spirit grows endlessly.
                      You fill my world with unparalleled joy and light.
                      <strong className='text-primary-foreground font-semibold'> Wishing you a birthday overflowing with happiness, laughter, and all the beautiful things you deserve.</strong> May this year bring you closer to your dreams!
                    </p>
                    <p className="text-right mt-6 text-accent font-semibold italic text-lg">
                      With all my love, <br />
                      [Your Name] {/* Replace with sender's name */}
                    </p>
                  </div>
                </CardContent>
             </div>
          </Card>
        </section>
      </main>

      <footer className="text-center mt-16 py-6 text-muted-foreground text-base fade-in" style={{ animationDelay: '0.6s' }}>
         <p>Made with Love <Heart className="inline w-5 h-5 text-accent fill-current" /></p>
        <p className='mt-1 text-sm'>Happy Birthday!</p>
      </footer>
    </div>
  );
}
