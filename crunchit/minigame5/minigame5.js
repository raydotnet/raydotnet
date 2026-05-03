let seconds = 30; 
let timer = null; 
function updateTimer() {

}

function startTimer() {
    if (timer === null) {
timer = setInterval (()=> {
    seconds--; 
    document.querySelector(".time").textContent = seconds;
if (seconds <= 0) {
    stopTimer();
}

}, 1000)}
    

   
}

window.onload = startTimer();

function stopTimer(){
        clearInterval(timer);
        timer = null;
        let fail = document.querySelector(".failcontainer");
        fail.style.visibility = "visible";
        fail.style.zIndex = 20;
        document.addEventListener("click", playVideo);
        
     function playVideo()
{
    if (fail.style.visibility = "visible")
    {
let video = document.querySelector(".gif");
    video.style.visibility = "visible";
    video.play();
    video.style.zIndex = 21;
    let videoContainer = document.querySelector(".gifcontainer");
    videoContainer.style.zIndex = 21;
    setTimeout(reload, 2000)
    
function reload() {
        if (video.style.visibility="visible"){
        window.open("minigame5.html", "_self");
        }
}}
    }

}

let nopeone = document.querySelector(".one");
let nopetwo = document.querySelector(".two");

let q = document.querySelector(".q");
    q.style.visibility="visible";
let w = document.querySelector(".w");
    w.style.visibility="visible";
let e = document.querySelector(".e");
    e.style.visibility="visible";
let r = document.querySelector(".r");
    r.style.visibility="visible";
let t = document.querySelector(".t");
    t.style.visibility="visible";
let y = document.querySelector(".y");
    y.style.visibility="visible";
    y.style.zIndex="5";
let u = document.querySelector(".u");
    u.style.visibility="visible";
let i = document.querySelector(".i");
    i.style.visibility="visible";
let o = document.querySelector(".o");
    o.style.visibility="visible";
let p = document.querySelector(".p");
    p.style.visibility="visible";

let a = document.querySelector(".a");
    a.style.visibility="visible";
let s = document.querySelector(".s");
    s.style.visibility="visible";
let d = document.querySelector(".d");
    d.style.visibility="visible";
let f = document.querySelector(".f");
    f.style.visibility="visible";
let g = document.querySelector(".g");
    g.style.visibility="visible";
let h = document.querySelector(".h");
    h.style.visibility="visible";
let j = document.querySelector(".j");
    j.style.visibility="visible";
let k = document.querySelector(".k");
    k.style.visibility="visible";
let l = document.querySelector(".l");
    l.style.visibility="visible";

let z = document.querySelector(".z");
    z.style.visibility="visible";
let x = document.querySelector(".x");
    x.style.visibility="visible";
let c = document.querySelector(".c");
    c.style.visibility="visible";
let v = document.querySelector(".v");
    v.style.visibility="visible";
let b = document.querySelector(".b");
    b.style.visibility="visible";
let n = document.querySelector(".n");
    n.style.visibility="visible";
let m = document.querySelector(".m");
    m.style.visibility="visible";


document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "q")
    {
        
        q.style.visibility = "hidden";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "w")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "hidden";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "e")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "hidden";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "r")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "hidden";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "t")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "hidden";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });





     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "y")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "hidden";
    
      
     
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        document.addEventListener(nopeOne);
        
    }
    
     });


     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "u")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "hidden";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "i")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "hidden";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "o")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "hidden";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "p")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "hidden";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "a")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "hidden";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "s")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "hidden";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "d")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "hidden";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        document.addEventListener(nopeTwo);
        
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "f")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "hidden";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "g")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "hidden";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "h")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "hidden";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "j")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "hidden";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "k")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "hidden";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "l")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "hidden";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "z")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "hidden";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "x")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "hidden";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "c")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "hidden";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "v")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "hidden";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "b")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "hidden";
        n.style.visibility = "visible";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

     document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "n")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "hidden";
        m.style.visibility = "visible";

        nopeone.style.visibility="hidden";
     nopetwo.style.visibility="hidden";
    }
    
     });

    document.addEventListener("keydown", function(event) {

    const pressedKey = event.key;
 
    if (pressedKey === "m")
    {
        
        q.style.visibility = "visible";
        w.style.visibility = "visible";
        e.style.visibility = "visible";
        r.style.visibility = "visible";
        t.style.visibility = "visible";
        y.style.visibility = "visible";
        u.style.visibility = "visible";
        i.style.visibility = "visible";
        o.style.visibility = "visible";
        p.style.visibility = "visible";

        a.style.visibility = "visible";
        s.style.visibility = "visible";
        d.style.visibility = "visible";
        f.style.visibility = "visible";
        g.style.visibility = "visible";
        h.style.visibility = "visible";
        j.style.visibility = "visible";
        k.style.visibility = "visible";
        l.style.visibility = "visible";

        z.style.visibility = "visible";
        x.style.visibility = "visible";
        c.style.visibility = "visible";
        v.style.visibility = "visible";
        b.style.visibility = "visible";
        n.style.visibility = "visible";
        m.style.visibility = "hidden";

        nopeone.style.visibility="hidden";
        nopetwo.style.visibility="hidden";
    }
    
     });

     
function nopeOne() {
        if (y.style.visibility = "hidden") {
            nopeone.style.visibility="visible";
        }
        else if (y.style.visibility="visible") {
            nopeone.style.visibility="hidden";
        }
     }
     
function nopeTwo() {
        if (d.style.visibility = "hidden") {
            nopetwo.style.visibility="visible";
        }
        else if (d.style.visibility="visible") {
            nopetwo.style.visibility="hidden";
        }
     }
 
     function showOne(){
            nopeone.style.visibility = "hidden";
            nopetwo.style.visibility = "hidden";
            clearInterval(timer);
            timer = null;
            
        let lineOne = document.querySelector(".line1");
        lineOne.style.visibility = "visible";
        setTimeout(showTwo, 5000);
        function showTwo(){
            let lineTwo = document.querySelector(".line2");
            lineTwo.style.visibility = "visible";
            
            }
        setTimeout(showThree, 10000);
       function showThree(){
                let lineThree = document.querySelector(".line3");
                lineThree.style.visibility="visible";
        }
}
     

function hideOne(){
    let lineOne =document.querySelector(".line1");
    lineOne.style.visibility="hidden";
}

function hideTwo(){
    let lineTwo =document.querySelector(".line2");
    lineTwo.style.visibility="hidden";
}

function hideThree(){
    let lineThree =document.querySelector(".line3");
    lineThree.style.visibility="hidden";
}

function hideIntro(){
    let intro =document.querySelector(".intro");
    intro.style.visibility="hidden";
}