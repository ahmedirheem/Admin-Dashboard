const chart = document.getElementById('chart').getContext('2d')

new Chart(chart, {
    type: 'line',
    data: {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [54545, 36561, 54858, 69853, 45753, 35478, 24986, 58795, 26492, 18476, 10542],
                borderWidth: 2,
                borderColor: 'red'
            },
            {
                label: 'ETH',
                data: [79524, 24583, 41385, 58665, 36647, 68478, 34986, 47588, 25745, 75474, 15857],
                borderWidth: 2,
                borderColor: 'blue'
            }
        ]
    }
})

const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const aside = document.querySelector('aside')

menuBtn.addEventListener('click', ()=>{
    aside.classList.toggle('active')
})
closeBtn.addEventListener('click', ()=>{
    aside.classList.remove('active')
})

const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')

    themeBtn.querySelector('span:first-child').classList.toggle('active')
    themeBtn.querySelector('span:last-child').classList.toggle('active')
})