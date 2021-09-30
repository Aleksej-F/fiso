console.log(upragBalli[1])
const n = {
    kategor: 0,
    pol: 0,
    ves: 0,
    vozrast: 0,
    kolUprash: 0
};



const danVkladka = function() { 
return {
kategor:-1,
vid:-1,
uprag:-1,
upragM:-1,
schetchik:0,
rezult:0,
ball:0
}
}

const uprag = {
vkladka:0,
vibor:[],
kategor:[
    '',
    'Общая физическая подготовка',
    'Специальная физическая подготовка',
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
const blokBal = document.querySelector('.block_bal')
let burgActive = false

//клик по меню
const burg =  function(event) {
    console.dir(event.target)
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
}

//клик в меню по выбор упражнений
const windHiderv = function() {
    burgCloze()
    windowi[0].classList.add('hiden')
    windowi[1].classList.remove('hiden')
    console.log('Вперед')
    //if ((uprag.vibor.length !== 0) & (uprag.vibor.length === n.kolUprash)) {return}
    n.kolUprash = (n.kolUprash === 0) ? 3 : n.kolUprash
    uprag.vkladka = 0
    windHider()
}

// создание и отрисовка окна упражнений
const windHider = function() {
    
    blokVkladok.innerHTML=''
    console.dir(windowi[0])
    //if (uprag.vibor.length === 0) {
        uprag.vibor = Array.from({length:n.kolUprash}).map(()=>danVkladka()) 
   // }
    
    for (let i = 0; i < n.kolUprash; i++) {
        let m = (i===0) ? "vkladi acti" : "vkladi"
        console.log(m)
        let opti = `
            <div date= ${i} class="${m}" >
                
            </div>
        `;
        blokVkladok.insertAdjacentHTML("beforeend", opti);

    }
       blokVkladok.addEventListener("click", creatClickVkladki)
       createSelect(kategorUprashSelect, uprag.kategor)
    /*navigation2.innerHTML=`
        Перейти к выбору упражнений. <div class=button onclick="windHider()">ДА </div>
    `*/
}

// окно сообщений
  const infoWindow = function(text) {
          const blockw =`
            <div class="wrap info_window_wrap">
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

// выбор категории
kategor.onchange = function() {
    n.kategor = kategor.value;
};

// выборать пол
pol.onclick = function() {
    // если категория не выбрана
    if (n.kategor === 0) {
        infoWindow('Выберите категорию!')
    } 
}

pol.onchange = function() {
    n.pol = pol.value;
    console.log(n.pol)
    vozrast.innerHTML=''
    ves.innerHTML=''
    navigation.innerHTML=''
    uprash.innerHTML=''
    if (n.pol==='0') {return}
    // формируем импут выбора весовой категории
    if (n.pol==="men") {
            ves.innerHTML = '<OPTION VALUE="1">до 70кг</OPTION><OPTION VALUE="2"> до 80кг </OPTION><OPTION VALUE="3">свыше 80кг  </OPTION>'
    } else {
            ves.innerHTML = '<OPTION VALUE="1">до 60кг  </OPTION><OPTION VALUE="2">до 70кг</OPTION><OPTION VALUE="3">свыше 70кг  </OPTION>'
    }
    // формируем импут выбора возрастной группы
        for ( i = 0; i < kategores[n.pol].length; i++) {
                    let opti = `
                        <OPTION VALUE="${i}">
                        ${kategores[n.pol][i].kategor}
                        </OPTION>
                    `;
                    vozrast.insertAdjacentHTML("beforeend", opti);
        }
};

// выбрать вес
ves.onchange = function() {
    n.ves = ves.value;
};
ves.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')

    } 
}

// выбрать возрастную группу       //vozrast
vozrast.onchange = function() {
    n.vozrast = +vozrast.value;
    const rr = kategores[n.pol][n.vozrast].kolUpr
    // формируем импут выбора колличества упражнений
    createSelect(uprash, rr)
    if (n.vozrast === 0) {navigation.innerHTML=''}
};
vozrast.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')
    } 
}

// выбрать количество упражнений
uprash.onclick = function() {
    if (n.vozrast === 0) {
        infoWindow('Выберите возрастную группу!')
    } 
}
uprash.onchange = function() {
    n.kolUprash = +kategores[n.pol][n.vozrast].kolUpr[uprash.value];
    console.log (kategores[n.pol][n.vozrast].kolUpr[uprash.value])
    if (n.kolUprash===0) {
        navigation.innerHTML=''
        return
    }
    navigation.innerHTML=`
       <div class="navig_str"> Перейти к выбору упражнений. 
        <div class="button" onclick="windHiderv()"> Да </div> 
       </div>
    `
    console.log (n.kolUprash)
    const butt =  document.querySelector('.button');
    const navigStr =  document.querySelector('.navig_str');
    setTimeout(() => navigStr.classList.toggle("navig_str_0"), 50);
    
    
   // butt.addEventListener(click, windHider);
}

//страница упражнений
//blokVkladok
//клик по  вкладкам
function creatClickVkladki(e) {
    const vkladi =  document.querySelectorAll('.vkladi');
   
    vkladi[uprag.vkladka].classList.toggle("acti")
    uprag.vkladka =  +(e.target.attributes.date.value)
    console.log('вкладка- ',uprag.vkladka,'  выбор вида упр  -',	uprag.vibor[uprag.vkladka])
    vkladi[uprag.vkladka].classList.toggle("acti")

    //формируем импут выбора физической подготовки
    createSelect(kategorUprashSelect, uprag.kategor)
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
        
        console.log(blokBal)
        blokBal.innerHTML = ""
    } else {
        setBlockBalli()
        setSchetBall(0)
    }
}

//функция наполнения для input
const createSelect = function(elem, obiect) {
   //console.log(elem)
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
   
    if (kategorUprashSelect.value !== '0') {
        uprag.vibor[uprag.vkladka].kategor = +kategorUprashSelect.value
        //формируем импут выбора категории упражнений
        createSelect(vidUprashSelect,uprag.vid[uprag.vibor[uprag.vkladka].kategor])
        uprag.vibor[uprag.vkladka].vid = -1
    } else {
        vidUprashSelect.innerHTML=''
        uprag.vibor[uprag.vkladka].kategor = -1
    }
    uprashViborSelect.innerHTML=''
    blokBal.innerHTML=''
    uprag.vibor[uprag.vkladka].uprag = -1
    uprag.vibor[uprag.vkladka].upragM = -1
    uprag.vibor[uprag.vkladka].schetchik = 0
    uprag.vibor[uprag.vkladka].rezult = 0
    uprag.vibor[uprag.vkladka].ball = 0
    console.log('вкладка- ',uprag.vkladka,'  выбор ФП  -',	uprag.vibor[uprag.vkladka])
    setRezultatSumm()
};

//выбор вида упражнения
vidUprashSelect.onclick = function() {
    if (uprag.vibor[uprag.vkladka].kategor === -1) {
        infoWindow('Выберите вид физической подготовки!')
    } 
}
vidUprashSelect.onchange = function() {
    uprag.vibor[uprag.vkladka].vid = (vidUprashSelect.value>0) ? +vidUprashSelect.value : -1;
    //формируем импут выбора упражнений
    createSelect(uprashViborSelect,uprag.uprag[uprag.vibor[uprag.vkladka].kategor][uprag.vibor[uprag.vkladka].vid])
    blokBal.innerHTML=''
    console.log('вкладка- ',uprag.vkladka,'  выбор вида упр  -',	uprag.vibor[uprag.vkladka])
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
    console.dir(uprashViborSelect.value)
    //uprag.vibor[uprag.vkladka].uprag = uprashViborSelect
    const rrr = +uprag.uprag[uprag.vibor[uprag.vkladka].kategor][uprag.vibor[uprag.vkladka].vid][+uprashViborSelect.value].substr(2,2)
    console.log(upragBalli[rrr])
    uprag.vibor[uprag.vkladka].uprag = rrr
    uprag.vibor[uprag.vkladka].upragM = uprashViborSelect.value
    console.log('вкладка- ',uprag.vkladka,'  выбор упраж  -',	uprag.vibor[uprag.vkladka])
    
    uprag.vibor[uprag.vkladka].schetchik = Math.round(upragBalli[rrr][0].length/2)
    setBlockBalli()
}
let schetchik = 0

//создание блока установки результата
const setBlockBalli = function() {
    blokBal.innerHTML = ""
    let balli = calsBalli(uprag.vibor[uprag.vkladka].schetchik) 
    console.log(balli)
    const blockw =`
        <div class="block_balli">
            <div  class="block_balli_col" >
                <div class="block_balli_col_but" onclick="setSchetBall(-1)"><p>&#9650</p>  </div>
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="0"> ${balli[0][0]} </div>
                        <div class="block_balli_col_text block_balli_col_text_osn " date="1"> ${balli[1][0]} </div>
                        <div class="block_balli_col_text" date="2"> ${balli[2][0]} </div>
                    </div>
                <div class="block_balli_col_but" onclick="setSchetBall(1)"> <p>&#9660</p> </div>
            </div>
            <div  class="block_balli_col" >
                <div class="block_balli_col_but" onclick="setSchetBall(-1)"> <p>&#9650</p> </div>           
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="3"> ${balli[0][1]} </div>
                        <div class="block_balli_col_text block_balli_col_text_osn" date="4"> ${balli[1][1]} </div>
                        <div class="block_balli_col_text" date="5"> ${balli[2][1]} </div>
                    </div>
                <div class="block_balli_col_but" onclick="setSchetBall(1)"> <p>&#9660</p> </div>
            </div>
        </div>
    `
    blokBal.insertAdjacentHTML("beforeend", blockw);
    setRezultatSumm()
}

const calsBalli = function(a) {
     console.log(uprag.vibor[uprag.vkladka].uprag)
     console.log(upragBalli[uprag.vibor[uprag.vkladka].uprag][0])
    const r = []
    let schetR = ((a-1)<0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1 : a-1

    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][0][schetR][0],
             upragBalli[uprag.vibor[uprag.vkladka].uprag][0][schetR][1]])
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][0][a][0],
                upragBalli[uprag.vibor[uprag.vkladka].uprag][0][a][1]])

    schetR = ((a+1)>upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1) ? 0:  a+1  
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][0][schetR][0],
        upragBalli[uprag.vibor[uprag.vkladka].uprag][0][schetR][1]])     
    
    uprag.vibor[uprag.vkladka].rezult = +upragBalli[uprag.vibor[uprag.vkladka].uprag][0][a][1]
    
    return r
}

const setSchetBall = function(a) {
    uprag.vibor[uprag.vkladka].schetchik = 
        (uprag.vibor[uprag.vkladka].schetchik + a > upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1) ? 0 :
         ( (uprag.vibor[uprag.vkladka].schetchik + a < 0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1 : (uprag.vibor[uprag.vkladka].schetchik + a))
    console.log(uprag.vibor[uprag.vkladka].schetchik)
    let balli = calsBalli(uprag.vibor[uprag.vkladka].schetchik) 
    const ballText = document.querySelectorAll('.block_balli_col_text')
    for (let i = 0; i < 3; i++) {
        ballText[i].innerHTML = balli[i][0]
        ballText[i+3].innerHTML = balli[i][1]
    }
    

    setRezultatSumm()

}

const setRezultatSumm = function () {
    let rezultatSumm = 0
    for (let i = 0; i < uprag.vibor.length ; i++) {
        rezultatSumm = rezultatSumm + uprag.vibor[i].rezult
    }
    navigationRezult.innerHTML = (rezultatSumm === 0) ? '' : rezultatSumm
}
//navigationRezult