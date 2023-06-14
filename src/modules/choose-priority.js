export function choosePriority() {
    const low = document.getElementById('low')
    const medium = document.getElementById('medium')
    const high = document.getElementById('high')

    low.addEventListener('click', () => {
        low.id = 'lowClicked'
        medium.id = 'medium'
        high.id = 'high'
    })

    medium.addEventListener('click', () => {
        low.id = 'low'
        medium.id = 'mediumClicked'
        high.id = 'high'
    })

    high.addEventListener('click', () => {
        low.id = 'low'
        medium.id = 'medium'
        high.id = 'highClicked'
    })
}