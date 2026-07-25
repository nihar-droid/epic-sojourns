interface Props{
    children:React.ReactNode;
}

export default function Badge({children}:Props){

return(

<span className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur px-5 py-2 uppercase tracking-[4px] text-sm text-white">

{children}

</span>

)

}