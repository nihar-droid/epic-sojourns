"use client";

import {motion} from "framer-motion";

const stats=[
["500+","Happy Travellers"],
["120+","Corporate Events"],
["40+","Wedding Celebrations"],
["25+","Countries"]
];

export default function Stats(){

return(

<section className="bg-[#081522] py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

{stats.map(([value,label])=>(

<motion.div

key={label}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.5}}

className="text-center"

>

<h2 className="text-6xl text-[#D4AF37] font-bold">

{value}

</h2>

<p className="mt-4 text-white text-lg">

{label}

</p>

</motion.div>

))}

</div>

</section>

)

}