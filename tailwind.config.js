/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  
  theme: {
    colors:{
      brightOrange:"hsl(var(--bright-orange))",
      darkCyan:"hsl(var(--dark-cyan))",
      veryDarkCyan:"hsl(var(--very-dark-cyan))",
      veryLightGrey:"hsl(var(--very-light-gray))",
      whiteTrans:"hsla(var(--transparent-white)/0.75)"
    },
    extend: {
      fontFamily:{
        lexendDeco:"Lexend Deca', sans-serif",
        bigShoulderFont:"'Big Shoulders Display', cursive;"
      }
    },
  },
  plugins: [],
}

