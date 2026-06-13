'use client';
import { useState } from 'react';

export default function SuffolkVIPLanding() {
  const [form, setForm] = useState({ pickup: '', dropoff: '', date: '', passengers: 1 });

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="p-6 border-b border-yellow-500 flex justify-between bg-black/90 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black text-3xl">VIP</div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">VIP Transportation of Suffolk County</h1>
            <p className="text-sm text-green-400">Bob Rudofsky • Rocky Point Base • (631) 655-5694</p>
          </div>
        </div>
        <a href="tel:6316555694" className="bg-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-500">CALL/TEXT BOB NOW</a>
      </header>

      <section className="pt-32 pb-24 text-center px-6 bg-gradient-to-b from-zinc-950 via-black to-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-red-900/60 text-red-300 px-6 py-2 rounded-full mb-6">Bob got fucked with $499 + $200/mo on the old site</div>
          <h2 className="text-6xl font-black tracking-tighter leading-none mb-8">Suffolk County VIP Rides — Book Online Like a Boss</h2>
          <p className="text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">Airport runs, winery trips, events across Suffolk/Nassau/NYC. Modern landing that actually gets bookings. Free upgrade for Bob (truck debt settled).</p>
          <button onClick={() => alert('Paul delivers this free to Bob — then sells the same to 10 other limo fucks for $299+')} className="bg-yellow-500 hover:bg-yellow-400 text-black text-2xl font-bold px-16 py-6 rounded-2xl">DEPLOY THIS FOR YOUR BIZ (PAID CLIENTS)</button>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Live Booking (What Bob's Clients Get Now)</h3>
          <div className="bg-zinc-950 p-10 rounded-3xl grid md:grid-cols-2 gap-8">
            <input 
              type="text" 
              placeholder="Pickup (Rocky Point, Suffolk, JFK...)" 
              className="bg-black border border-zinc-700 p-5 rounded-2xl text-lg placeholder:text-zinc-500" 
              onChange={(e) => setForm({...form, pickup: e.target.value})} 
            />
            <input 
              type="text" 
              placeholder="Dropoff" 
              className="bg-black border border-zinc-700 p-5 rounded-2xl text-lg placeholder:text-zinc-500" 
              onChange={(e) => setForm({...form, dropoff: e.target.value})} 
            />
            <input 
              type="date" 
              className="bg-black border border-zinc-700 p-5 rounded-2xl text-lg" 
              onChange={(e) => setForm({...form, date: e.target.value})} 
            />
            <input 
              type="number" 
              placeholder="Passengers" 
              value={form.passengers} 
              className="bg-black border border-zinc-700 p-5 rounded-2xl text-lg" 
              onChange={(e) => setForm({...form, passengers: parseInt(e.target.value) || 1})} 
            />
          </div>
          <button 
            onClick={() => alert(`Booking from ${form.pickup} to ${form.dropoff} on ${form.date} for ${form.passengers} pax — AI routed to Bob! $1499 tier adds real voice agent.`)} 
            className="mt-12 w-full bg-green-600 py-8 text-2xl font-bold rounded-3xl hover:bg-green-500"
          >
            REQUEST YOUR RIDE — CONFIRMED FAST
          </button>
        </div>
      </section>

      <footer className="p-12 text-center text-zinc-500 border-t border-zinc-800">Free for Bob Rudofsky (truck debt cleared) • Built by Apex Executive Studio • Paul's Horny Empire Grind • Vercel Deploy • Khanit & Kao Fuel</footer>
    </div>
  );
}
