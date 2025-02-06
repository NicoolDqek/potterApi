fetch('https://potterapi-fedeperin.vercel.app/es/houses')
.then(res => res.json())
.then(res => {
    console.log(res)
})
fetch('https://potterapi-fedeperin.vercel.app/es/characters')
.then(res => res.json())
.then(res => {
    console.log(res)
})
fetch('https://potterapi-fedeperin.vercel.app/es/books')
.then(res => res.json())
.then(res => {
    console.log(res)
})
fetch('https://potterapi-fedeperin.vercel.app/es/spells')
.then(res => res.json())
.then(res => {
    console.log(res)
})