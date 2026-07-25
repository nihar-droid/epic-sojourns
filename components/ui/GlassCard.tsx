interface Props{
children:React.ReactNode;
}

export default function GlassCard({children}:Props){

return(

<div className="rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/20">

{children}

</div>

)

}