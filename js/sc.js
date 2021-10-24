const n = (getConditions('n')=== true) ? {
    pol: '0',
    ves: 0,
    vozrast: 0,
    kategor: 0,
    kolUprash: 0,
    kolUprashValue: 0,
    xdown: 0,
    downRpizn: false
} : getConditions('n')

console.log(n)

const danVkladka = function() { 
    return {
        kategor: -1, // вид физической подготовки
        vid: -1,     // вид упраждений
        uprag: -1,   // номер выбранного упражнения для выбора из upragBalli
        upragM: -1,  // упражнение в окне выбора
        upragNumArray: 0,  // номер массива результатов для упражнений с несколькими вариантами
        schetchik: 0, // счетчик для вычисления блока резултатов
        rezult: 0,
        ball: 0,
        parog: false,
    }
}

const uprag = {
vkladka: (getConditions('activVkladka') === true) ? 0 : getConditions('activVkladka'),
vibor: (getConditions('conditionTabs') === true) ? Array.from({length:5}).map(()=>danVkladka()) : getConditions('conditionTabs'),
kategor:[
    ['',
    'Общая физическая подготовка',
    'Специальная физическая подготовка'],
    ['',
    'ОФП',
    'СФП']
],
vid:[
    [],
    [
    '',
    'Сила',
    'Быстрота',
    'Выносливость',
    'Ловкость',
    ],
    ['',
    'Ускоренное передвижение',
    'Преодоление препятствий',
    'Рукопашный бой',
    'Военно-прикладное плавание',
    'Специальные приемы и действия'
    ]
],
uprag:
[    [],
    [   [],
        [//сила
            '',
            '№ 1. Сгибание и разгибание рук в упоре лежа',
            '№ 2. Наклон туловища вперед',
            '№ 3. Подтягивание на перекладине',
            '№ 4. Поднимание ног к перекладине',
            '№ 5. Подъем переворотом на перекладине',
            '№ 6. Подъем силой на перекладине',
            '№ 7. Комбинированное силовое упражнение на перекладине',
            '№ 8. Сгибание и разгибание рук в упоре на брусьях',
            '№ 9. Угол в упоре на брусьях',
            '№ 10. Рывок гири',
            '№ 11. Толчок двух гирь',
            '№ 12. Толчок двух гирь по длинному циклу',
            '№ 13. Жим штанги лежа',
            '№ 14. Становая тяга со штангой',
            '№ 15. Приседание со штангой'
        ],[//быстрота
            '',
            '№ 16. Бег на 60 м',
            '№ 17. Бег на 100 м',
            '№ 18. Челночный бег 10х10 м',
            '№ 19. Прыжок в длину с места',
            '№ 20. Тройной прыжок с места',
            '№ 21. Плавание на 50 м вольным стилем',
            '№ 22. Плавание на 100 м вольным стилем',
            '№ 23, Плавание на 100 м способом брасс'
        ],[//выносливость
            '',
            '№ 24, Бег на 400 м ',
            '№ 25, Челночный бег 4х100 м',
            '№ 26, Бег на 1 км',
            '№ 27, Бег на 3 км',
            '№ 28, Бег на 5 км',
            '№ 29, Лыжная гонка на 5 км',
            '№ 30, Лыжная гонка на 10 км',
            '№ 31, Плавание на 500 м вольным стилем',
            '№ 32, Восхождение на платформу (тумбу)'
        ],[//ловкость
            '',
            '№ 33, Комплексное упражнение на ловкость',
            '№ 34, Прыжки со скакалкой',
            '№ 35, Передвижение по узкой опоре (бревну)',
            '№ 36 Комбинированное упражнение на брусьях',
            '№ 37 Комбинированное упражнение на перекладине',
            '№ 38, Упражнения в прыжках',
            '№ 39, Упражнение с баскетбольным мячом',
            '№ 40, Упражнение с мини-футбольным мячом',
            '№ 41, Упражнение с волейбольным мячом',
            '№ 42, Упражнение с гандбольным мячом'
        ]
    ],
    [   [],
        [//Ускоренное передвижение
            '',
            '№ 43, Бег на 60 м с грузом',
            '№ 44, Бег 60 м в экипировке с автоматом',
            '№ 45, Бег на 40 м со сменой направления',
            '№ 46, Челночный бег 4х15 м',
            '№ 47, Марш-бросок на 5 км',
            '№ 48, Марш-бросок на 5 км в составе подразделения',
            '№ 49, Марш-бросок на лыжах на 5 км',
            '№ 50, Марш на лыжах на 10 км в составе подразделения',
            '№ 51, Марш в составе подразделения на 20 км'
        ],[//Преодоление препятствий
            '',
            '№ 52, Общее контрольное упражнение на единой полосе препятствий',
            '№ 53, Преодоление единой полосы препятствий в составе подразделения',
            '№ 54, СКУ для курсантов ВУЗ Сухопутных войск, морской пехоты ВМФ',
            '№ 55, СКУ для курсантов ВУЗ танковых, зенитно-ракетных, ракетных',
            '№ 56, СКУ для военнослужащих Воздушно-десантных войск',
            '№ 57, СКУ для военнослужащих наводных кораблей и подводных лодок',
            '№ 58, СКУ для военнослужащих горных подразделений'
        ],[// Рукопашный бой
            '',
            '№ 59, Комплекс приемов «РБН - 1»',
            '№ 60, Комплекс приемов «РБН- 2»',
            '№ 61, Комплекс приемов «РБН- 3»',
            '№ 62, Комплекс приемов «РБО- 1»',
            '№ 63, Комплекс приемов «РБО- 2»',
            '№ 64, Комплекс приемов «РБО-3»',
            '№ 65, Комплекс приемов «РБО- 4»',
            '№ 66, Комплекс приемов «РБО- 5»',
            '№ 67, Комплекс «РБС»'
        ],[//«Военно-прикладное плавание»
            '',
            '№ 68, Плавание в обмундировании с оружием на 50 метров',
            '№ 69, Плавание в обмундировании с оружием на 100 метров',
            '№ 70, Ныряние в длину в обмундировании '
        ],[//«Специальные приемы и действия»
            '',
            '№ 71, Бег на 3 км с метанием гранат и стрельбой ',
            '№ 72, Бег с преодолением полосы препятствий',
            '№ 73, Бег с преодолением полосы препятствий в составе подразделения',
            '№ 74, Комплексное упражнение «Квадрат»',
            '№ 75, Упражнение на стационарном гимнастическом колесе',
            '№ 76, Упражнение на подвижном гимнастическом колесе',
            '№ 77, Упражнение на лопинге',
            '№ 78, Упражнение на батуте ',
            '№ 79, Восхождение на платформу(тумбу)',
            '№ 80, Бег на 60 м зигзагом',
            '№ 81, Комплексное упражнение № 1',
            '№ 82, Комплексное упражнение № 2',
            '№ 83, Комплексное упражнение № 3',
            '№ 84, Комплексное упражнение № 4',
            '№ 85, Пеший марш на 4 км в составе подразделения',
            '№ 86, Пеший марш на 12 км в составе подразделения',
            '№ 87, Пеший марш на 30 км в составе подразделения',
            '№ 88, Отрыв от противника в составе подразделения',
            '№ 90, Статическое силовое упражнение',
            '№ 91, Упор на предплечьях лежа',
            '№ 92, Комбинированное упражнение с баскетбольным мячом',
            '№ 93, Метание гранаты на дальность с места',
            '№ 94, Метание гранат на точность'
        ],
    ]
]

}

const kategor = document.getElementById("kategorSelect");
const pol = document.getElementById("polSelect");
const ves = document.getElementById("vesSelect");
const vozrast = document.getElementById("vozrastSelect");
const uprash = document.getElementById("uprashSelect");
const navigation = document.getElementById("navigation");
const windowi =  document.querySelectorAll('.window');
const blokVkladok =  document.querySelector('.blok_vkladok')
const kategorUprashSelect = document.getElementById("kategorUprashSelect");
const wrap =  document.querySelector('.wrap')
const hBurger = document.querySelector('.header_burder')
const mBurger = document.querySelector('.header_menu')
const navigationRezult = document.getElementById('navigation_rezult')
const navigationUprag = document.getElementById('navigation_uprag')
const navigationEstimation = document.getElementById('navigation_estimation')
const blokBal = document.querySelector('.block_bal')
const headerHTitle = document.getElementById("headerHTitle");
const navigationHistogram = document.getElementById('navigation_histogram')

let burgActive = false

//клик по меню
const burg =  function(event) {
    event.stopPropagation()
    if (burgActive) { 
        burgCloze()
        return
    }
    hBurger.classList.add('active')
    mBurger.classList.add('active')
    burgActive = !burgActive
}

//закрытие бургера
const burgCloze =  function() {
    hBurger.classList.remove('active')
    mBurger.classList.remove('active')
    burgActive = false
}

//клик по экрану мимо меню бургера
const clicSection =  function(event) {
    if (burgActive) { burgCloze() }
}

//клик в меню по настройка
const windHidervNastr = function() {
    burgCloze()
    windowi[0].classList.remove('hiden')
    windowi[1].classList.add('hiden')
    headerHTitle.innerHTML="Настройка"
}


//клик в меню по выбор упражнений
const windHiderv = function() {
    burgCloze()
   
    console.log(windowi[1].classList.contains('hiden'))
    if (!windowi[1].classList.contains('hiden')) return
  
    if ( n.pol === '0' ) {
        infoWindow('Выберите пол!')
        return
    }
    if ( n.ves === 0 ) {
        infoWindow('Выберите вес!')
        return
    }
    if ( n.vozrast === 0 ) {
        infoWindow('Выберите возрастную группу!')
        return
    }
    if ( n.kategor === 0) {
        infoWindow('Выберите категорию войск!')
        return
    }
    if (n.kolUprash === 0) {
        infoWindow('Выберите количество упражнений!')
        return
    }
    
    windowi[0].classList.add('hiden')
    windowi[1].classList.remove('hiden')
    headerHTitle.innerHTML="Расчет баллов"
        
    n.kolUprash = (n.kolUprash === 0) ? 3 : n.kolUprash
    //если активная вкладка больше количества упражнений вкладка = 0
    if (uprag.vkladka > n.kolUprash) {uprag.vkladka = 0}
    // создание и отрисовка окна выбора упражнений
    windHider()
}

// создание и отрисовка окна выбора упражнений
const windHider = function() {
    
    blokVkladok.innerHTML=''
    navigationRezult.innerHTML = '' 
    navigationEstimation.innerHTML = ''
    blokBal.innerHTML = '' 
    
    for (let i = 0; i < n.kolUprash; i++) {
        let m = (i===uprag.vkladka) ? "vkladi acti" : "vkladi"
        let opti = `
            <div date= ${i} class="${m}">
            
            </div>
        `;
        blokVkladok.insertAdjacentHTML("beforeend", opti);
        //отрисовка заголовка вкладки
        createVkladiHeader(i)
    }

    blokVkladok.addEventListener("click", creatClickVkladki)
       
    setClickVkladki()
}

// окно сообщений
const infoWindow = function(text) {
          const blockw =`
            <div class="info_window_wrap">
                <div  class="info_window" >
                    <div class="info_window_text"> ${text} </div>
                    <div id='info_window_ok' onclick="clozeInfoWindow()"> Ok </div>
                </div>
            </div>
        `
        wrap.insertAdjacentHTML("beforeend", blockw);
}
// удаление окна сообщений
const clozeInfoWindow = function() {
    document.querySelector('.info_window_wrap').remove()
}

//наполнение инпутов при старте приложения
const createSettings = function () {
    
    if (n.pol === 'men') {
        polSelect.selectedIndex = 1
    } else if (n.pol === 'woman') {
        polSelect.selectedIndex = 2
    }
    
    console.dir(polSelect)
    //формируем инпут: вес и возрастная группа
    createPol()
    vesSelect.selectedIndex = n.ves
    vozrastSelect.selectedIndex = n.vozrast
    
    // формируем импут выбора категории
    if (n.pol !=='0') {
        console.log( n.pol)
        let rr = kategores[n.pol][n.vozrast].kategoris
        createSelect(kategor, rr)
        kategorSelect.selectedIndex = n.kategor
    }
        
    // формируем импут выбора количества упражнений
    if (n.pol !=='0') {
    rr = kategores[n.pol][n.vozrast].kolUpr[n.kategor]
    createSelect(uprash, rr)
    uprashSelect.selectedIndex = n.kolUprashValue
    }
     
    navigation.innerHTML=''
    if (n.kolUprash === 0) {
        return
    }
    // отрисовка кнопки
    createSettingsButton()
}

createSettings()

// выбрать пол
pol.onchange = function() {
    n.pol = pol.value
    n.ves = 0
    n.vozrast = 0
    n.kategor = 0
    n.kolUprash = 0
    n.kolUprashValue = 0

    ves.innerHTML=''
    vozrast.innerHTML=''
    kategor.innerHTML=''
    uprash.innerHTML=''
    navigation.innerHTML=''
    createPol()
}
// наполнение выбора пола
function createPol () {
    if (n.pol==='0' || n.pol===0) {
        //n.pol = 0
        return }
    // формируем импут выбора весовой категории
    if (n.pol==="men") {
            ves.innerHTML = '<OPTION VALUE="0"></OPTION><OPTION VALUE="1">до 70кг</OPTION><OPTION VALUE="2"> до 80кг </OPTION><OPTION VALUE="3">свыше 80кг  </OPTION>'
    } else {
            ves.innerHTML = '<OPTION VALUE="0"><OPTION VALUE="1">до 60кг  </OPTION><OPTION VALUE="2">до 70кг</OPTION><OPTION VALUE="3">свыше 70кг  </OPTION>'
    }
    // формируем импут выбора возрастной группы
    for ( i = 0; i < kategores[n.pol].length; i++) {
        let opti = `
            <OPTION VALUE="${i}">
            ${kategores[n.pol][i].kategor}
            </OPTION>
        `
        vozrast.insertAdjacentHTML("beforeend", opti)
    }
}

// выбрать вес
ves.onchange = function() {
    n.ves = +ves.value;
}

//клик по выберите пол
ves.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')
    } 
}

//клик по возрастной группе
vozrast.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')
    } 
}
// выбрать возрастную группу 
vozrast.onchange = function() {
    n.vozrast = +vozrast.value;
    n.kategor = 0
    n.kolUprash = 0
    kategor.innerHTML=''
    uprash.innerHTML=''
    navigation.innerHTML=''
    
    const rr = kategores[n.pol][n.vozrast].kategoris
    // формируем импут выбора категории
    createSelect(kategor, rr)
    if (n.vozrast === 0) {navigation.innerHTML=''}
}

//клик по категории
kategor.onclick = function() {
    // если возраст не выбран
    if (n.vozrast === 0) {
        infoWindow('Выберите возрастную группу!')
    } 
}
// выбор категории
kategor.onchange = function() {
    n.kategor = +kategor.value;
    n.kolUprash = 0
    const rr = kategores[n.pol][n.vozrast].kolUpr[n.kategor]
    // формируем импут выбора количества упражнений
    createSelect(uprash, rr)
}

// клик по  количество упражнений
uprash.onclick = function() {
    if (n.kategor === 0) {
        infoWindow('Выберите категорию!')
    } 
}
// выбрать количество упражнений
uprash.onchange = function() {
    n.kolUprashValue = uprash.value
    n.kolUprash = +kategores[n.pol][n.vozrast].kolUpr[n.kategor][uprash.value];
    if (n.kolUprash === 0) {
        navigation.innerHTML=''
        return
    }
    // добавление кнопки
    createSettingsButton()
}

// создание кнопки Перейти к выбору упражнений
function createSettingsButton() {
    if (navigation.innerHTML!=='') {return}
    navigation.innerHTML=`
       <div class="navig_str">  
        <div class="button" onclick="windHiderv()"> Перейти к выбору упражнений </div> 
       </div>
    `
    const butt =  document.querySelector('.button');
    const navigStr =  document.querySelector('.navig_str');
    setTimeout(() => navigStr.classList.toggle("navig_str_0"), 50);
}

//страница упражнений
//blokVkladok
//клик по  вкладкам
function creatClickVkladki(e) {
    const vkladi =  document.querySelectorAll('.vkladi');
   
    vkladi[uprag.vkladka].classList.toggle("acti")
    
    uprag.vkladka =  +(e.target.attributes.date.value)
    
    vkladi[uprag.vkladka].classList.toggle("acti")
    // отрисовка вкладки
    setClickVkladki()

}
// отрисовка вкладки при клике
function setClickVkladki() {
    console.log('отрисовка содержимого вкладки')
    //формируем импут выбора физической подготовки
    createSelect(kategorUprashSelect, uprag.kategor[0])
    kategorUprashSelect.value = (uprag.vibor[uprag.vkladka].kategor === -1) ? '0' : String(uprag.vibor[uprag.vkladka].kategor)

    //формируем импут выбора упражнений
    const param = (uprag.vibor[uprag.vkladka].kategor === -1) ? [] : uprag.vid[uprag.vibor[uprag.vkladka].kategor]
    createSelect(vidUprashSelect, param)
    vidUprashSelect.value = (uprag.vibor[uprag.vkladka].vid === -1) ? '0' : String(uprag.vibor[uprag.vkladka].vid)
        
    //формируем импут выбора упражнений
    const rr = ((uprag.vibor[uprag.vkladka].kategor === -1) || (uprag.vibor[uprag.vkladka].vid === -1)) ? [] :
        uprag.uprag[uprag.vibor[uprag.vkladka].kategor][uprag.vibor[uprag.vkladka].vid]
    createSelect(uprashViborSelect,rr)
    uprashViborSelect.value = (uprag.vibor[uprag.vkladka].upragM === -1) ? '0' : String(uprag.vibor[uprag.vkladka].upragM)

    //формируем окно выбора результата
    if (uprag.vibor[uprag.vkladka].uprag === -1) {
        blokBal.innerHTML = ""
    } else {
        calsUpragNumArray(uprag.vibor[uprag.vkladka].uprag)
        setBlockBalli()
        setSchetBall(0)
    }
}
//функция для наполнения  input
function createSelect(elem, obiect) {
    elem.innerHTML=''

    for (let i = 0; i < obiect.length; i++) {
        let opti = `
            <OPTION VALUE="${i}">
                ${obiect[i]}
            </OPTION>
        `;
        elem.insertAdjacentHTML("beforeend", opti);
    }
};
// выбор физической подготовки
kategorUprashSelect.onchange = function() {
   const vkladi =  document.querySelectorAll('.vkladi');
    if (kategorUprashSelect.value !== '0') {
        uprag.vibor[uprag.vkladka].kategor = +kategorUprashSelect.value
        //формируем импут выбора категории упражнений
        createSelect(vidUprashSelect,uprag.vid[uprag.vibor[uprag.vkladka].kategor])
        uprag.vibor[uprag.vkladka].vid = -1
        vkladi[uprag.vkladka].innerHTML=`
            <div date= ${uprag.vkladka}>${uprag.kategor[1][uprag.vibor[uprag.vkladka].kategor]} </div>
        `
    } else {
        vidUprashSelect.innerHTML=''
        uprag.vibor[uprag.vkladka].kategor = -1
        vkladi[uprag.vkladka].innerHTML=''
    }
    uprashViborSelect.innerHTML=''
    blokBal.innerHTML=''
    calcParamNull()
    addHelppToggle()
};
//клик по  вид упражнений
vidUprashSelect.onclick = function() {
    if (uprag.vibor[uprag.vkladka].kategor === -1) {
        infoWindow('Выберите вид физической подготовки!')
    } 
}
//выбор вида упражнения
vidUprashSelect.onchange = function() {
    uprag.vibor[uprag.vkladka].vid = (vidUprashSelect.value>0) ? +vidUprashSelect.value : -1;
    //формируем импут выбора упражнений
    createSelect(uprashViborSelect,uprag.uprag[uprag.vibor[uprag.vkladka].kategor][+vidUprashSelect.value])
    //подписываем вкладки
    createVkladiHeader(uprag.vkladka)
    //обсчет результата
    calcParamNull()
    addHelppToggle()
}

// изменение размера окна
document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
       console.log(document.body.clientWidth)
       //определить размер шрифта в зависимости от размера окна
        //const r3 ='"'+ calcFontSize().slice(17)
        const r3 =calcFontSize().slice(7,-1)
        console.log(r3)
        const vkladiVidupr = document.querySelectorAll('.vkladi_vidupr')
        console.dir(vkladiVidupr)
        const histogramBlocks = document.querySelector('.block_histogram_blocks')
                
        for (i = 0; i < vkladiVidupr.length; i++) {
            vkladiVidupr[i].attributes.style.nodeValue = r3
           
        }
    };
});
// отрисовка заголовка вкладки
const createVkladiHeader = function(vkladka) {
    
    const vkladi =  document.querySelectorAll('.vkladi');
    const r1 = (uprag.vibor[vkladka].kategor > 0 ? uprag.kategor[1][uprag.vibor[vkladka].kategor] : '')
    const r2 = ((uprag.vibor[uprag.vkladka].vid < 0) || (uprag.vibor[vkladka].kategor < 0)) ? '' :
        uprag.vid[uprag.vibor[vkladka].kategor][uprag.vibor[vkladka].vid]
    //определить размер шрифта в зависимости от размера окна
    const r3 = calcFontSize()
            
    vkladi[vkladka].innerHTML=`
        <div date= ${vkladka}>${r1} </div>
        <div class="vkladi_vidupr" ${r3}   date= ${vkladka}>${r2} </div>
    `
}

function calcFontSize() {
    let r3 = ''
    if (document.body.clientWidth < 400) {
        r3 = (n.kolUprash === 3) ? 'style="font-size:4vw"': 
            (n.kolUprash === 4) ? 'style="font-size:3.5vw"':
            (n.kolUprash === 2) ? 'style="font-size:4vw"': 
            'style="font-size:3vw"'
    } else r3 =  'style="font-size:"'
    return r3
}

// клик по выбор упражнения
uprashViborSelect.onclick = function() {
    if (uprag.vibor[uprag.vkladka].vid === -1) {
        infoWindow('Выберите вид уражнений!')
    } else {
        //uprag.vibor[uprag.vkladka].uprag = +uprashViborSelect.value;
    }
}
// выбор упражнения
uprashViborSelect.onchange = function() {
    if (uprashViborSelect.value === '0') {
        blokBal.innerHTML = ""
        uprag.vibor[uprag.vkladka].rezult = 0
        uprag.vibor[uprag.vkladka].upragM = 0
        setRezultatSumm()
        addHelppToggle()
        return
    }
    
    const rrr = +uprag.uprag[uprag.vibor[uprag.vkladka].kategor][uprag.vibor[uprag.vkladka].vid][+uprashViborSelect.value].substr(2,2)
    uprag.vibor[uprag.vkladka].uprag = rrr
    uprag.vibor[uprag.vkladka].upragM = uprashViborSelect.value
    //определение номера массива для отображения результа и баллов
    calsUpragNumArray(rrr)
    //создание блока установки результата
    setBlockBalli() 
    //показать help
    addHelppToggle()
}

// спрятать, показать help
const addHelppToggle = function() {
    const help = document.querySelector('.ramka5_title_help')
   /*/
    if ((uprag.vibor[uprag.vkladka].upragM > 0) ) {
        help.classList.remove('vizible')
        
    } else {
       help.classList.add('vizible')
        
    }*/

}

//определение номера массива для отображения результа и баллов
const calsUpragNumArray = function(rrr) {
    if (uprag.vibor[uprag.vkladka].schetchik === 0) {
        uprag.vibor[uprag.vkladka].schetchik = Math.round(upragBalli[rrr][0].length/2)
    }
    
    uprag.vibor[uprag.vkladka].upragNumArray = 0
    switch (rrr) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            console.log( 'упражнения по весу' );
            uprag.vibor[uprag.vkladka].upragNumArray = +n.ves-1
            break;
        case 16:
        case 17:
        case 18:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 52:
            console.log( 'возраст' );
            if (n.pol ==='men') {
                uprag.vibor[uprag.vkladka].upragNumArray = (n.vozrast < 9) ? 0 : 1
            } else { uprag.vibor[uprag.vkladka].upragNumArray = (n.vozrast < 8) ? 0 : 1}
            break;
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
            console.log( 'Рукопашка' );
            if (n.pol ==='men') {
                uprag.vibor[uprag.vkladka].upragNumArray = n.vozrast - 1
            } else { uprag.vibor[uprag.vkladka].upragNumArray = n.vozrast + 13}
            break;
        case 72:
        case 72:
            console.log( 'Перебор' );
          break;
        default:
         
    }
}

//обнуление состояния вкладки
const calcParamNull = function() {
    blokBal.innerHTML=''
    uprag.vibor[uprag.vkladka].uprag = -1
    uprag.vibor[uprag.vkladka].upragM = -1
    uprag.vibor[uprag.vkladka].schetchik = 0
    uprag.vibor[uprag.vkladka].rezult = 0
    uprag.vibor[uprag.vkladka].ball = 0
    console.log('вкладка- ',uprag.vkladka,'  выбор вида упр  -',	uprag.vibor[uprag.vkladka])
    setRezultatSumm()
}

//создание блока установки результата
const setBlockBalli = function() {
    blokBal.innerHTML = ""
    //вычисление массива для отрисовки блока установки результата
    let balli = calsBalli(uprag.vibor[uprag.vkladka].schetchik) 
    const blockw =`
        <div class="block_balli">
                <div  class="block_balli_col">
                    <div class="block_balli_col_titl"> Результат </div>
                    <div class="block_balli_col_but" onclick="setAnimateBall(-31, 1)"> <div>&#9650</div> </div>
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="0"> ${balli[0][0]} </div>
                        <div class="block_balli_col_text " date="1"> ${balli[1][0]} </div>
                        <div class="block_balli_col_text" date="2"> ${balli[2][0]} </div>
                        <div class="block_balli_col_text" date="3"> ${balli[3][0]} </div>
                        <div class="block_balli_col_text" date="4"> ${balli[4][0]} </div>
                        <div class="block_balli_col_text_osn " > </div>
                    </div>
                    <div class="block_balli_col_but but" onclick="setAnimateBall(31, -1)"> <div>&#9660</div> </div>
                </div>
                <div  class="block_balli_col" >
                    <div class="block_balli_col_titl"> Баллы </div>
                    <div class="block_balli_col_but" onclick="setAnimateBall(-31, 1)"> <div>&#9650</div> </div>           
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="5"> ${balli[0][1]} </div>
                        <div class="block_balli_col_text " date="6"> ${balli[1][1]} </div>
                        <div class="block_balli_col_text" date="7"> ${balli[2][1]} </div>
                        <div class="block_balli_col_text " date="8"> ${balli[3][1]} </div>
                        <div class="block_balli_col_text" date="9"> ${balli[4][1]} </div>
                        <div class="block_balli_col_text_osn " > </div>
                    </div>
                    <div class="block_balli_col_but but" onclick="setAnimateBall(31, -1)"> <div>&#9660</div> </div>
                </div>
            
        </div>
    `
    blokBal.insertAdjacentHTML("beforeend", blockw);
    // добавляю обработчик по нажатию мыши 
    const blockBballi = document.querySelectorAll('.block_balli_col_blok')
    blockBballi.forEach(element => {
       // element.addEventListener("mousedown", blockBballiDown);
        element.addEventListener("touchstart", blockBballiDowntouch, false);
     //   element.addEventListener("mouseup", blockBballiUp);
        element.addEventListener("touchend", blockBballiUptouch);
     //   element.addEventListener("mousemove", blockBballiMove);
        element.addEventListener("touchmove", blockBballiMovetouch, false);
    })
    // создание гистограммы
    createBlockHistogram()

    //addEventListener("click", handler);
    setRezultatSumm()
}

//создание блока гистограммы
function createBlockHistogram() {
    console.log('гистограмма')
    //отдрисовка подписи
    const histogramSignature = document.querySelector('.block_histogram_signature')
    histogramSignature.innerHTML=''
    let blockw = `<div class="block_histogram_signature_block">0</div>`
    histogramSignature.insertAdjacentHTML("beforeend", blockw);
    const estimation = kategores[n.pol][n.vozrast].estimation[n.kategor][(n.kolUprash-2)]
    
    for (i = 0; i < estimation.length; i++) {
        blockw = `<div class="block_histogram_signature_block">${estimation[i]}</div>`
        histogramSignature.insertAdjacentHTML("beforeend", blockw);
    }
    blockw = `<div class="block_histogram_signature_block">${n.kolUprash*100}</div>`
    histogramSignature.insertAdjacentHTML("beforeend", blockw);
    //отрисовка гистограммы
    const histogramBlocks = document.querySelector('.block_histogram_blocks')
    histogramBlocks.innerHTML=''
    for (i = 0; i < n.kolUprash; i++) {
        blockw = `<div class="block_histogram_blocks_block"></div>`
        histogramBlocks.insertAdjacentHTML("beforeend", blockw);
    }

}

function blockBballiDown(e) {
    console.log('нажал кнопку мыши')
    n.downRpizn = true
    n.xdown=e.offsetY
    console.log(n.xdown)
}
function blockBballiUp() {
    console.log('отпустил кнопку мыши')
    n.downRpizn = false
}
function blockBballiMove(e) {
    console.log('движение мышью')
   // if (n.downRpizn) {
        console.log(n.xdown - e.offsetY)
        if (Math.abs(n.xdown - e.offsetY)  > 1 ) {    
            if ((n.xdown - e.offsetY)>0 ) {
                setSchetBall(1)
            } else { setSchetBall(-1)}
            n.xdown = e.offsetY
        }
   // }
}
let textY = 0
let textY0 = 0
//коснулся пальцем
function blockBballiDowntouch(e) {
    e.preventDefault();
    console.log('коснулся пальцем')
    n.downRpizn = true
    n.xdown=e.targetTouches[0].clientY
    textY = 0
    textY0 = 0
    console.log(n.xdown)
}
// отпустил палец
function blockBballiUptouch() {
    console.log('отпустил палец')
    n.downRpizn = false
    if (Math.abs(textY - textY0)<30) {
       
        if ((textY - textY0)>0 ) {
            setAnimateBall(31, -1)
        } else { 
            setAnimateBall(-31, 1)
        }
        textY = 0 
        textY0 = 0
    }
}


// движение пальцем
function blockBballiMovetouch(e) {
    console.log('движение пальцем')
    e.preventDefault();
    const y = e.targetTouches[0].clientY
    /*
    //логика изменения значений результатов и баллов
    if (n.downRpizn) {
        console.log(n.xdown - y)
        if (Math.abs(n.xdown - y) >1  )  {    
            if ((n.xdown - y)>0 ) {
                setSchetBall(1)
            } else { 
                setSchetBall(-1)
            }
            n.xdown = y
        }
    }
    */
    if (n.downRpizn) {
        console.log(n.xdown - y)
        if (Math.abs(n.xdown - y) > 1) {    
            if ((n.xdown - y) > 0) {
                textY -= Math.abs(n.xdown - y)
            } else { 
                textY += Math.abs(n.xdown - y)
            }
            setCoordinatesBall(textY)
            n.xdown = y
        }
        console.log(textY - textY0)
        if (Math.abs(textY - textY0) > 30) {
            if ((textY - textY0) > 0) {
                setSchetBall(-1)
            } else { 
                setSchetBall(1)
            }
            textY = 0
            textY0 = 0
            setCoordinatesBall(textY)
        }
    }

}
//установака и отмена анимации блока баллов
const setAnimateBall = function (xx, yy) {
    setCoordinatesBallScroll(xx)
    setTimeout(() => {
        setSchetBall(yy)
        setCoordinatesBall(0)
    }, 1000)
}
// анимация прокрутки блока баллов
const setCoordinatesBallScroll = function (textY) {
    const ballText = document.querySelectorAll('.block_balli_col_text')       
    let n = -31
    for (let i = 0; i < 5; i++)  {
        ballText[i].style.transition = 'top 1s ease 0s'
        ballText[i + 5].style.transition = 'top 1s ease 0s'
        ballText[i].style.top = (textY + n) +'px'
        ballText[i + 5].style.top = (textY + n) +'px'
        n += 31
    }
}  

// обнуление блока баллов после анимации
const setCoordinatesBall = function (textY) {
    const ballText = document.querySelectorAll('.block_balli_col_text')       
    let n = -31
    for (let i = 0; i < 5; i++)  {
        ballText[i].style.top = (textY + n) +'px'
        ballText[i + 5].style.top = (textY + n) +'px'
        ballText[i].style.transition = ''
        ballText[i + 5].style.transition = ''
        n += 31
    }
    
}   

// вычисление массива для отрисовки блока выбора результата
const calsBalli = function(a) {
    const r = []
    
    let schetR = ((a-2)<0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1 : a-2
   
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
             upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])
    
    schetR = ((a-1)<0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1 : a-1
    
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
             upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])
    
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][a][0],
                upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][a][1]])

    schetR = ((a+1)>upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1) ? 0 :  a+1  
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
        upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])     
    
    schetR = ((a+2)>upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1) ? 0 :  a+2  
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
            upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])     
    
    uprag.vibor[uprag.vkladka].rezult = +r[2][1]
    
    return r
}

// пересчет счетчика значения баллов для вкладки при прокрутке или клике по кнопкам вверх или вниз
const setSchetBall = function(a) {
    // изменяем состояние счетчика вкладки
    uprag.vibor[uprag.vkladka].schetchik = 
        (uprag.vibor[uprag.vkladka].schetchik + a > upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1) ? 0 :
         ( (uprag.vibor[uprag.vkladka].schetchik + a < 0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1 : 
         (uprag.vibor[uprag.vkladka].schetchik + a))
    
    // пересчитываем массив для отрисовки и обновляем блок выбора результатов
    let balli = calsBalli(uprag.vibor[uprag.vkladka].schetchik) 
    const ballText = document.querySelectorAll('.block_balli_col_text')
    for (let i = 0; i < 5; i++) {
        ballText[i].innerHTML = balli[i][0]
        ballText[i+5].innerHTML = balli[i][1]
    }
    setRezultatSumm()
}

// вычисление и вывод суммарного результа по всем упражнениям
const setRezultatSumm = function () {
    
    const w = (100 / n.kolUprash)
    const histogramBlocksBlock = document.querySelectorAll('.block_histogram_blocks_block')
    
    
    
    const vkladi =  document.querySelectorAll('.vkladi');
    let rezultatSumm = 0
    let thresholdLevel = false
    for (let i = 0; i < n.kolUprash  ; i++) {
        histogramBlocksBlock[i].style.width = `${w * uprag.vibor[i].rezult / 100 }%`
        console.log(kategores[n.pol][n.vozrast].porog)
        console.log(uprag.vibor[i].rezult)
        if ((uprag.vibor[i].rezult < kategores[n.pol][n.vozrast].porog)&(uprag.vibor[i].rezult>0)) {
            thresholdLevel = true
            vkladi[i].classList.add("vkladiPorog") 
        } else {
            if (vkladi[i].classList.contains('vkladiPorog')) {vkladi[i].classList.remove('vkladiPorog')} 
        } 
        rezultatSumm = rezultatSumm + uprag.vibor[i].rezult
    }
   
    const estimation = kategores[n.pol][n.vozrast].estimation[n.kategor][(n.kolUprash-2)]
   
    let rezultatEstimation = (rezultatSumm < estimation[0]) ? 'неудовлетворительно' :
        (rezultatSumm < estimation[1]) ? 'удовлетворительно' :
        (rezultatSumm < estimation[2]) ? 'хорошо' :
        (rezultatSumm < estimation[3]) ? 'отлично (3 уровень)' :
        (rezultatSumm < estimation[4]) ? 'отлично (2 уровень)' :
        (rezultatSumm < estimation[5]) ? 'отлично (1 уровень)' : 'отлично (высший уровень)' 
    if (thresholdLevel) {rezultatEstimation = 'неудовлетворительно <br> (пороговый минимум)'}
    
    //navigationHistogram.innerHTML = ''
    navigationRezult.innerHTML = (rezultatSumm === 0) ? '' : rezultatSumm
    navigationEstimation.innerHTML = (rezultatSumm === 0) ? '' : rezultatEstimation
    
}

//сохраняем состояние настроек и вкладок
const saveCondition = function () {
    // сериализуем  объект
    const serialObj = JSON.stringify({
            n, // настройки
            activVkladka: uprag.vkladka,
            conditionTabs: uprag.vibor
        });         
                
    try {	
        // запишем его в хранилище по ключу "condition"
        localStorage.setItem('condition', serialObj); 
    }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            infoWindow('Превышен лимит памяти!')
            
        }
    }/*
    try {	
        // запишем его в хранилище по ключу "results"
        localStorage.setItem(results, serialObj); 
    }catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            infoWindow('Превышен лимит памяти!')
        }
    }*/
}
//получить состояние настроек и вкладок
function getConditions(param) {
    //спарсим в объект значение по ключу 'condition' 
    const conditions = JSON.parse(localStorage.getItem('condition')); 
    console.log(conditions)
    if (conditions === null) {
        return true
    } else console.log('conditions')
    
    switch (param) {
        case  'n':
            console.log(conditions.n)
            return conditions.n
            break;
        case 'activVkladka':
            return conditions.activVkladka
            break;
        case 'conditionTabs':
            return conditions.conditionTabs
            break;
        default:
            break;
     }
}