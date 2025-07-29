import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/bim-hero-image.jpg";
const BlogPost = () => {
  const publishDate = "December 30, 2024";
  const updateDate = "July 28, 2025";
  const readTime = "5 Mins";
  const companies = [{
    name: "Tesla Outsourcing Services",
    website: "www.teslaoutsourcingservices.com",
    specialties: ["Architectural BIM", "Structural BIM", "MEP BIM", "3D Modeling", "Coordination & Clash Prevention"],
    description: "Leader in architectural, structural, and MEP BIM modeling with global outsourcing excellence."
  }, {
    name: "AECOM",
    website: "www.aecon.com/us",
    specialties: ["Infrastructure Projects", "Airports", "Roads", "Energy Infrastructure"],
    description: "Worldwide architect, engineer and construction services provider with BIM integration benchmark."
  }, {
    name: "Gensler",
    website: "www.gensler.com",
    specialties: ["Commercial Architecture", "Cityscapes", "Mixed-use Projects"],
    description: "One of the world's largest architectural firms, early adopter of BIM for complex projects."
  }, {
    name: "HDR Inc.",
    website: "www.hdrinc.com",
    specialties: ["Transport", "Healthcare", "Government Infrastructure"],
    description: "Specializes in BIM services with expertise in accuracy and cost efficiency."
  }, {
    name: "DPR Construction",
    website: "www.dpr.com",
    specialties: ["Healthcare", "Commercial", "Residential"],
    description: "Uses state-of-the-art BIM systems for automation and cost-effectiveness."
  }, {
    name: "Arup",
    website: "www.arup.com",
    specialties: ["Sustainable Architecture", "Infrastructure", "Urban Development"],
    description: "International engineering and design firm for sustainable projects."
  }];
  return <article className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} />
        
        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">
              BIM Industry Insights
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Top BIM Service Providers
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Shaping the Future of Architecture and Design
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Posted on {publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated on {updateDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Read Time: {readTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="p-8 mb-12 shadow-architectural">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <strong className="text-foreground">Building Information Modeling (BIM)</strong> revolutionises the way architecture, engineering, and construction (AEC) teams collaborate, reducing errors and streamlining project delivery. As demand for sustainable, high-performance buildings grows from commercial towers and healthcare facilities to infrastructure and residential developments specialised BIM service providers have become indispensable. Below is an updated overview of leading BIM firms in the United States, showcasing their expertise, standout projects, and what sets them apart.
              </p>
              
            </div>
          </Card>

          {/* Why Choose Best BIM Company */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose The Best BIM Company?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
                <p className="text-muted-foreground">
                  Modern software tools like Autodesk Revit, Navisworks, BIM 360, and ArchiCAD for accurate modeling and automation.
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Collaboration</h3>
                <p className="text-muted-foreground">
                  Effective communication and cooperation ensuring project requirements are met with necessary adjustments.
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Successful projects across different industries with excellent outcomes showcasing talent and creativity.
                </p>
              </Card>
            </div>
          </section>

          {/* Top Companies */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center">Best BIM Companies in the USA</h2>
            
            <div className="space-y-8">
              {companies.map((company, index) => <Card key={index} className="p-8 hover:shadow-architectural transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-accent">#{index + 1}</span>
                        <h3 className="text-2xl font-bold text-foreground">{company.name}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {company.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.specialties.map((specialty, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>)}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        Website: {company.website}
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </section>

          {/* Impact Section */}
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
            <h2 className="text-3xl font-bold mb-6 text-center">How BIM is Changing Building Construction</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Project Efficiency</h3>
                <p className="text-muted-foreground mb-4">
                  BIM helps reduce time and costs by enabling teams to identify issues before they occur, avoiding rework and delays while providing accurate cost estimates.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent">Professional Benefits</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Architects can visualize and test designs before construction</li>
                  <li>• Engineers conduct detailed analysis and simulations</li>
                  <li>• Contractors achieve optimal coordination and conflict resolution</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Conclusion & CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Get the Complete Guide</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">Discover how top BIM service providers across the U.S. are transforming architectural workflows with cutting-edge modeling, coordination, and design practices. This guide dives deeper into their methods, technologies, and the future-forward impact they’re making in the AEC industry.</p>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-all duration-300" asChild>
              <a href="https://biminfo.neocities.org/top-bim-service-provider-in-the-usa" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Read More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>;
};
export default BlogPost;