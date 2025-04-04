export default function RandomColor() { 
    const newColor = chroma.random().hex()
    return newColor
}
