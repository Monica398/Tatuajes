import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import estudio from "../assets/estudio.png";
import tatuando from "../assets/tatuando.jpg";
import Ren from "../assets/Ren.jpg";
import Hana from "../assets/Hana.jpg";
import Kai from "../assets/Kai.jpg";
import espacio from "../assets/espacio.png";

export function HomePage() {
    return (
        <main className="w-full overflow-x-hidden bg-[#F4EFE7]">

{/* ===== Primera sección ===== */}
<section
    className="relative flex min-h-[680px] w-full items-center overflow-hidden bg-cover bg-[65%_center]"
    style={{ backgroundImage: `url(${estudio})` }}
>
    {/* Capa oscura */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Degradado para que el texto se lea mejor */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

    {/* Contenido */}
    <div className="relative z-10 flex min-h-[680px] w-full items-center px-10 md:px-14 lg:px-20">
        <div className="max-w-lg text-white">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#C8655B]">
                Tatuajes con identidad
            </p>

            <h1 className="font-serif text-5xl leading-[0.92] md:text-6xl lg:text-7xl">
                Arte que
                <br />
                se queda
                <br />
                contigo.
            </h1>

            <p className="mt-7 text-base leading-relaxed text-white/90 md:text-lg">
                Tatuajes únicos, diseñados especialmente para ti.
                <br />
                Convierte tu idea en una obra de arte.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button className="h-12 rounded-none bg-[#171717] px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#333333]">
                    Reservar cita
                    <Plus className="ml-2 h-4 w-4" />
                </Button>

                <button
                    type="button"
                    onClick={() => {
                        document
                            .getElementById("artistas")
                            ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white"
                >
                    <span className="border-b border-white pb-1 transition-colors group-hover:border-[#C8655B] group-hover:text-[#C8655B]">
                        Ver artistas
                    </span>

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
            </div>

        </div>
    </div>
</section>
            {/* ===== Segunda sección ===== */}
            <section className="grid grid-cols-1 bg-[#F4EFE7] lg:grid-cols-2">

                {/* Imagen */}
                <img
                    src={tatuando}
                    alt="Artista realizando un tatuaje"
                    className="h-[420px] w-full object-cover object-top"
                />

                {/* Texto */}
                <div className="flex items-center px-8 py-10 lg:px-14">
                    <div className="max-w-xl">

                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#171717]">
                            Okinawa
                        </p>

                        <h2 className="font-serif text-4xl leading-[0.95] text-[#171717] md:text-5xl">
                            Más que tinta,
                            <br />
                            <span className="italic">
                                es una historia.
                            </span>
                        </h2>

                        <p className="mt-8 text-base leading-relaxed text-[#292929] md:text-lg">
                            Creemos que cada tatuaje tiene una historia, un recuerdo
                            y un momento que no se desea olvidar. Por eso cada diseño
                            es único.
                        </p>

                        <p className="mt-6 text-base leading-relaxed text-[#292929] md:text-lg">
                            OKINAWA es un espacio creativo, honesto y real, donde la
                            piel se convierte en un lienzo.
                        </p>

                    </div>
                </div>

            </section>

            {/* ===== Tercera sección: artistas ===== */}
            <section
                id="artistas"
                className="scroll-mt-20 bg-[#F4EFE7] px-6 py-14 lg:px-10"
            >
                {/* Encabezado */}
                <div className="mx-auto mb-8 max-w-6xl">

                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#B6423C]">
                        Nuestros artistas
                    </p>

                    <h2 className="font-serif text-4xl leading-none text-[#171717] md:text-5xl">
                        Conoce a los artistas.
                    </h2>

                </div>

                {/* Tarjetas */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {/* Ren */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">
                        <img
                            src={Ren}
                            alt="Ren, artista de Okinawa"
                            className="h-[300px] w-full object-cover"
                        />

                        <div className="px-5 py-4">
                            <h3 className="text-xl font-bold uppercase text-[#171717]">
                                Ren
                            </h3>

                            <p className="mt-1 text-sm text-[#292929]">
                                Fine Line · Minimalismo
                            </p>
                        </div>
                    </article>

                    {/* Hana */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">
                        <img
                            src={Hana}
                            alt="Hana, artista de Okinawa"
                            className="h-[300px] w-full object-cover"
                        />

                        <div className="px-5 py-4">
                            <h3 className="text-xl font-bold uppercase text-[#171717]">
                                Hana
                            </h3>

                            <p className="mt-1 text-sm text-[#292929]">
                                Floral · Black & Grey
                            </p>
                        </div>
                    </article>

                    {/* Kai */}
                    <article className="overflow-hidden border border-[#D8D1C7] bg-[#F4EFE7]">
                        <img
                            src={Kai}
                            alt="Kai, artista de Okinawa"
                            className="h-[300px] w-full object-cover"
                        />

                        <div className="px-5 py-4">
                            <h3 className="text-xl font-bold uppercase text-[#171717]">
                                Kai
                            </h3>

                            <p className="mt-1 text-sm text-[#292929]">
                                Realismo · Neo Tribal
                            </p>
                        </div>
                    </article>

                </div>
            </section>

            {/* ===== Cuarta sección: estudio ===== */}
            <section className="bg-[#F4EFE7] px-6 py-10 lg:px-10">

                <div className="mx-auto mb-10 max-w-6xl border-t border-[#D8D1C7]" />

                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">

                    {/* Imagen */}
                    <div>
                        <img
                            src={espacio}
                            alt="Interior del estudio Okinawa"
                            className="max-h-[430px] w-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Información */}
                    <div>

                        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#B6423C]">
                            Visita nuestro estudio
                        </p>

                        <h2 className="mb-6 font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
                            Un espacio creado
                            <br />
                            para inspirar.
                        </h2>

                        <p className="text-base leading-relaxed text-[#292929] md:text-lg">
                            Diseñado para que te sientas cómodo, seguro y en buenas
                            manos.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    );
}