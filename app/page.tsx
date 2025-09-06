"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Utensils,
  Heart,
  Flag,
  Clock,
  Mountain,
  Waves,
  Coffee,
  Music,
  Users,
  Palmtree,
  Sun,
  Globe,
} from "lucide-react"

const sections = [
  { id: "culture", title: "Cultura", icon: Heart, color: "bg-primary" },
  { id: "food", title: "Comida", icon: Utensils, color: "bg-secondary" },
  { id: "places", title: "Lugares", icon: MapPin, color: "bg-primary" },
  { id: "symbols", title: "Símbolos Nacionales", icon: Flag, color: "bg-secondary" },
  { id: "history", title: "Historia", icon: Clock, color: "bg-primary" },
]

export default function ElSalvadorPage() {
  const [activeSection, setActiveSection] = useState("home")

  const renderContent = () => {
    switch (activeSection) {
      case "culture":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Cultura Salvadoreña</h2>
              <p className="text-muted-foreground text-lg">Tradiciones ricas que definen nuestra identidad</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-primary" />
                    Música y Danza
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    La música folclórica tradicional incluye marimba, cumbia y salsa. La danza nacional es el Xuc,
                    interpretada durante festivales y celebraciones. El torito pinto es otra danza tradicional muy
                    popular.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Valores Familiares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    La familia es la piedra angular de la sociedad salvadoreña. Las familias extensas a menudo viven
                    juntas, y el respeto por los mayores está profundamente arraigado en nuestra cultura. "La familia es
                    lo primero" es un dicho muy común.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Festivales y Celebraciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Las celebraciones principales incluyen Las Fiestas Agostinas (Festival de Agosto), Día de los
                    Muertos, y Navidad. Cada pueblo tiene su propio festival del santo patrón. Las Alfombras de Semana
                    Santa son especialmente hermosas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "food":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Gastronomía Salvadoreña</h2>
              <p className="text-muted-foreground text-lg">Sabores que cuentan nuestra historia</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-primary" />
                    Pupusas
                  </CardTitle>
                  <Badge variant="secondary">Plato Nacional</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Tortillas gruesas de maíz rellenas de queso, frijoles, chicharrón o loroco (flor comestible). Se
                    sirven con curtido (repollo encurtido) y salsa de tomate. Cada segundo domingo de noviembre se
                    celebra el Día Nacional de la Pupusa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Yuca Frita con Chicharrón</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Yuca frita servida con chicharrón (cerdo frito) y curtido. Un alimento reconfortante muy querido en
                    todo el país. Perfecta para compartir en familia los fines de semana.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Horchata de Morro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Bebida tradicional hecha de semillas de morro, arroz, canela y vainilla. Refrescante y únicamente
                    salvadoreña. Se vende en las calles en carritos especiales y es perfecta para el clima tropical.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "places":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Lugares Hermosos</h2>
              <p className="text-muted-foreground text-lg">De volcanes a playas, descubre nuestros paisajes</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-primary" />
                    Ruta de las Flores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Una ruta escénica a través de pueblos montañosos conocidos por plantaciones de café, murales
                    coloridos y mercados de fin de semana. Incluye Nahuizalco, Salcoatitán, Juayúa, Apaneca y Ataco.
                    Perfecta para el turismo cultural.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="h-5 w-5 text-primary" />
                    Playa El Tunco
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Famoso destino de surf en la costa del Pacífico. Playas de arena negra volcánica con excelentes olas
                    y vibrante vida nocturna. Parte del circuito Surf City que atrae visitantes de todo el mundo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Joya de Cerén</CardTitle>
                  <Badge variant="outline">Patrimonio Mundial UNESCO</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    La "Pompeya de las Américas" - una aldea agrícola precolombina preservada bajo ceniza volcánica, que
                    ofrece perspectivas sobre la vida maya antigua. Descubierta en 1976, es única en el mundo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "symbols":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Símbolos Nacionales</h2>
              <p className="text-muted-foreground text-lg">Íconos que representan nuestra nación</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flag className="h-5 w-5 text-primary" />
                    Bandera Nacional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Tres franjas horizontales: azul (cielo y mar), blanco (paz), azul. El escudo de armas presenta un
                    triángulo que representa la igualdad, libertad y fraternidad. Fue adoptada el 27 de mayo de 1912.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Torogoz (Ave Nacional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    El momoto cejiazul, conocido por su hermoso plumaje azul y verde. Simboliza la unidad familiar ya
                    que estas aves se aparean de por vida. Su nombre científico es Eumomota superciliosa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Izote (Flor Nacional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Flor blanca de la planta de yuca, utilizada en la cocina tradicional. Representa la pureza y la
                    resistencia del pueblo salvadoreño. Sus flores se preparan en deliciosos platillos tradicionales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "history":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Historia</h2>
              <p className="text-muted-foreground text-lg">De civilizaciones antiguas a tiempos modernos</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Era Precolombina</CardTitle>
                  <Badge variant="outline">Antes de 1500</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Hogar del pueblo Pipil e influenciado por la civilización Maya. Sociedades agrícolas avanzadas con
                    complejas redes comerciales. Sitios como Tazumal y Casa Blanca muestran esta rica herencia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Período Colonial Español</CardTitle>
                  <Badge variant="outline">1500-1821</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Conquista española liderada por Pedro de Alvarado. Introducción del cristianismo, idioma español y
                    arquitectura colonial que aún define nuestras ciudades como Suchitoto y Santa Ana.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Independencia y Era Moderna</CardTitle>
                  <Badge variant="outline">1821-Presente</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Independencia de España en 1821. El café se convirtió en la columna vertebral económica. Hoy, El
                    Salvador es una república democrática enfocada en educación, desarrollo y tecnología como Bitcoin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4 py-12">
              <h1 className="text-4xl md:text-6xl font-bold text-primary text-balance">Descubre El Salvador</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                La Tierra de los Volcanes te da la bienvenida para explorar nuestra rica cultura, deliciosa gastronomía
                y cálida hospitalidad
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <Badge variant="default" className="text-sm bg-primary">
                  🌋 Tierra de Volcanes
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  🏄‍♂️ Paraíso del Surf
                </Badge>
                <Badge variant="outline" className="text-sm">
                  ☕ Cultura del Café
                </Badge>
                <Badge variant="outline" className="text-sm">
                  🏛️ Historia Maya
                </Badge>
              </div>
            </div>

            <Card className="bg-card border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-primary">Datos Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-primary">Capital</p>
                    <p className="text-card-foreground">San Salvador</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Población</p>
                    <p className="text-card-foreground">6.5 Millones</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Idioma</p>
                    <p className="text-card-foreground">Español</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Moneda</p>
                    <p className="text-card-foreground">Dólar USD & Bitcoin</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-4 pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-primary">Área</p>
                    <p className="text-card-foreground">21,041 km²</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Clima</p>
                    <p className="text-card-foreground">Tropical 28°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Independencia</p>
                    <p className="text-card-foreground">15 Sept 1821</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Coffee className="h-5 w-5" />
                    Café de Clase Mundial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    El Salvador produce algunos de los mejores cafés del mundo, cultivados en suelo volcánico a gran
                    altitud. Nuestra cultura cafetera es central en la vida diaria y la interacción social. El café
                    Pacamara es especialmente reconocido internacionalmente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20 border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Heart className="h-5 w-5" />
                    Hospitalidad Cálida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    Los salvadoreños somos conocidos por nuestra calidez y amabilidad. "Mi casa es su casa" refleja
                    nuestro espíritu acogedor hacia los visitantes. La sonrisa salvadoreña es genuina y el
                    "¡Bienvenido!" siempre es sincero.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Palmtree className="h-5 w-5" />
                    Surf City
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    El Salvador es reconocido mundialmente como destino de surf. Nuestras costas del Pacífico ofrecen
                    olas perfectas todo el año, atrayendo surfistas de todo el mundo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Globe className="h-5 w-5" />
                    Primer País Bitcoin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    En 2021, El Salvador se convirtió en el primer país del mundo en adoptar Bitcoin como moneda de
                    curso legal, posicionándose como líder en innovación financiera.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Sun className="h-5 w-5" />
                    Eterna Primavera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground">
                    Nuestro clima tropical permite disfrutar de temperaturas agradables todo el año. Con playas,
                    montañas y volcanes, cada día es perfecto para la aventura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">{renderContent()}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
            <Button
              variant={activeSection === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("home")}
              className="flex flex-col items-center gap-1 h-auto py-2 px-3"
            >
              <Flag className="h-4 w-4" />
              <span className="text-xs">Inicio</span>
            </Button>

            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{section.title}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
