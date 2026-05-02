import { auth } from "@/auth";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import BubbleUpButton from "@/components/ui/bubble-up-button";
import OutlineButton from "@/components/ui/outline-button";

export default async function Home() {
  const session = await auth();

  const storyCards = [
    {
      eyebrow: "Trust first",
      title: "Backed by a university email.",
      description:
        "Recruiters see a verified student signal before they see the work.",
    },
    {
      eyebrow: "Show the work",
      title: "Keep your best work in one place.",
      description:
        "Projects, decks, prototypes, and case studies stay organized and easy to review.",
    },
    {
      eyebrow: "Share cleanly",
      title: "Share one clean public link.",
      description:
        "Send it from class, interviews, or your resume without extra friction.",
    },
  ];

  const steps = [
    "Create your account with a registered university email.",
    "Add your best academic projects and presentation assets.",
    "Share your public link so recruiters and collaborators can review it instantly.",
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(to_bottom,_rgba(255,255,255,0.96),_rgba(250,250,250,1))]" />
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Verified student identity
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Made for recruiters
              </Badge>
            </div>

            <div className="grid items-center gap-12">
              <div className="space-y-8">
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl font-satoshi">
                    Verified portfolios for ambitious students.
                  </h1>
                  <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Show your work with trust, clarity, and one clean link.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={session ? "/explore" : "/register"}
                    className="block"
                  >
                    <BubbleUpButton className="w-full sm:w-auto text-center flex items-center justify-center">
                      {session ? "Explore Projects" : "Get Started"}
                    </BubbleUpButton>
                  </Link>
                  <Link href="/explore" className="block">
                    <OutlineButton
                      className="w-full sm:w-auto text-center flex items-center justify-center"
                      variant="outline"
                    >
                      Explore Projects
                    </OutlineButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* story cards */}
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            Why it works
          </Badge>
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            Designed for trust
          </Badge>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 ">
          {storyCards.map((card) => (
            <Card
              key={card.title}
              className="border-black/5 bg-white/80 shadow-sm backdrop-blur"
            >
              <CardContent className="space-y-4 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {card.eyebrow}
                </p>
                <h2 className="text-xl font-semibold tracking-tight font-satoshi">
                  {card.title}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* how it works */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              How it works
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-satoshi">
              Three steps from sign-up to shareable proof.
            </h2>
            <p className="max-w-xl text-muted-foreground leading-7">
              Verify your identity, publish your projects, and share one public
              profile link.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <Card key={step} className="border-black/5">
                <CardContent className="flex gap-4 p-5 items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {step}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* trust points */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-4">
        <div className="space-y-4">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            Trust signals
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-satoshi">
            The signals that make the portfolio feel credible.
          </h2>
          <p className="max-w-xl text-muted-foreground leading-7">
            Keep the page focused on the proof points that matter most to a
            student portfolio.
          </p>
        </div>
        <div className="grid w-full  gap-6 md:grid-cols-4">
          {[
            [
              "University email",
              "Identity stays grounded in a trusted academic address.",
            ],
            [
              "Public portfolios",
              "Every profile can be shared as a clean, readable link.",
            ],
            [
              "Project discovery",
              "Students can be found through the work they actually make.",
            ],
            [
              "Recruiter trust",
              "The experience is designed to look credible at first glance.",
            ],
          ].map(([title, description]) => (
            <Card key={title} className="border-black/5 bg-white/85">
              <CardContent className="space-y-3 p-5">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* call to action */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-black/5 bg-foreground/80 text-background">
          <CardContent className="flex flex-col gap-8 p-8  lg:p-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Ready to publish
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-satoshi">
                Start with a verified profile. Let the work speak.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/70">
                Keep sign-up simple, keep the portfolio public, and keep the
                focus on trust.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="block">
                <BubbleUpButton className="w-full sm:w-auto whitespace-nowrap text-center flex items-center justify-center">
                  Get Started
                </BubbleUpButton>
              </Link>
              <Link
                href="/explore"
                className="inline-flex w-full whitespace-nowrap items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Explore Projects
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
