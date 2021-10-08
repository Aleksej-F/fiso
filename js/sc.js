const n = {
    pol: 0,
    ves: 0,
    vozrast: 0,
    kategor: 0,
    kolUprash: 0,
    xdown:0,
    downRpizn: false

};

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
vkladka:0,
vibor:Array.from({length:5}).map(()=>danVkladka()),
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
}

//клик в меню по выбор упражнений
const windHiderv = function() {
    burgCloze()
    console.log(windowi[1].classList.contains('hiden'))
    if (!windowi[1].classList.contains('hiden')) return
  
    if ( n.pol === 0 ) {
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
    console.log('Вперед')
    
    n.kolUprash = (n.kolUprash === 0) ? 3 : n.kolUprash
   
    windHider()
    
    console.log(uprag.vibor)
   
}

// создание и отрисовка окна выбора упражнений
const windHider = function() {
    
    blokVkladok.innerHTML=''
    navigationRezult.innerHTML = '' 
    navigationEstimation.innerHTML = ''
    blokBal.innerHTML = '' 
    
    //uprag.vibor = Array.from({length:n.kolUprash}).map(()=>danVkladka()) 
   
    for (let i = 0; i < n.kolUprash; i++) {
        let m = (i===uprag.vkladka) ? "vkladi acti" : "vkladi"
        
        let opti = `
            <div date= ${i} class="${m}">
            
            </div>
        `;
        blokVkladok.insertAdjacentHTML("beforeend", opti);
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


// выбрать пол
pol.onchange = function() {
    n.pol = pol.value
    n.ves = 0
    n.vozrast = 0
    n.kategor = 0
    n.kolUprash = 0
    
    ves.innerHTML=''
    vozrast.innerHTML=''
    kategor.innerHTML=''
    uprash.innerHTML=''
    navigation.innerHTML=''
    
    if (n.pol==='0') {
        n.pol = 0
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
        `;

        vozrast.insertAdjacentHTML("beforeend", opti)
    }
    
    
};
// выбрать вес
ves.onchange = function() {
    n.ves = +ves.value;
};
ves.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')
    } 
}
// выбрать возрастную группу       //vozrast
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
};
vozrast.onclick = function() {
    if (n.pol === 0) {
        infoWindow('Выберите пол!')
    } 
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


};
// выбрать количество упражнений
uprash.onclick = function() {
    if (n.kategor === 0) {
        infoWindow('Выберите категорию!')
    } 
}
uprash.onchange = function() {
    console.log (uprash.value)
    n.kolUprash = +kategores[n.pol][n.vozrast].kolUpr[n.kategor][uprash.value];
    console.log (kategores[n.pol][n.vozrast].kolUpr[n.kategor][uprash.value])
    if (n.kolUprash === 0) {
        navigation.innerHTML=''
        return
    }
    if (navigation.innerHTML!=='') {return}
    navigation.innerHTML=`
       <div class="navig_str">  
        <div class="button" onclick="windHiderv()"> Перейти к выбору упражнений </div> 
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
    console.log(e.target)
    vkladi[uprag.vkladka].classList.toggle("acti")
    
    uprag.vkladka =  +(e.target.attributes.date.value)
    console.log('вкладка- ',uprag.vkladka,'  выбор вида упр  -',	uprag.vibor[uprag.vkladka])
    vkladi[uprag.vkladka].classList.toggle("acti")
    setClickVkladki()

}
// отрисовка вкладки при клике
function setClickVkladki() {
    
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
        setBlockBalli()
        setSchetBall(0)
    }
}
//функция для наполнения  input
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
    createSelect(uprashViborSelect,uprag.uprag[uprag.vibor[uprag.vkladka].kategor][+vidUprashSelect.value])
    //подписываем вкладки
    createVkladiHeader(uprag.vkladka)
    //обсчет результата
    calcParamNull()
}
//отрисовка заголовка вкладки
const createVkladiHeader = function(vkladka) {
    console.log(vkladka)
    const vkladi =  document.querySelectorAll('.vkladi');
    const r1 = (uprag.vibor[vkladka].kategor > 0 ? uprag.kategor[1][uprag.vibor[vkladka].kategor] : '')
    const r2 = ((uprag.vibor[uprag.vkladka].vid < 0) || (uprag.vibor[vkladka].kategor < 0)) ? '' :
        uprag.vid[uprag.vibor[vkladka].kategor][uprag.vibor[vkladka].vid]
    vkladi[vkladka].innerHTML=`
        <div date= ${vkladka}>${r1} </div>
        <div class="vkladi_vidupr" date= ${vkladka}>${r2} </div>
    `
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
        case 72:
        case 72:
            console.log( 'Перебор' );
          break;
        default:
         
    }
    console.log(  uprag.vibor[uprag.vkladka].upragNumArray );
    setBlockBalli() //создание блока установки результата
}
let schetchik = 0
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
    console.log(balli)
    const blockw =`
        <div class="block_balli">
            <div  class="block_balli_col" >
                <div class="block_balli_col_but" onclick="setSchetBall(-1)"><div>&#9650</div>  </div>
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="0"> ${balli[0][0]} </div>
                        <div class="block_balli_col_text block_balli_col_text_osn " date="1"> ${balli[1][0]} </div>
                        <div class="block_balli_col_text" date="2"> ${balli[2][0]} </div>
                    </div>
                <div class="block_balli_col_but but" onclick="setSchetBall(1)"> <div>&#9660</div> </div>
            </div>
            <div  class="block_balli_col" >
                <div class="block_balli_col_but" onclick="setSchetBall(-1)"> <div>&#9650</div> </div>           
                    <div  class="block_balli_col_blok" >
                        <div class="block_balli_col_text" date="3"> ${balli[0][1]} </div>
                        <div class="block_balli_col_text block_balli_col_text_osn" date="4"> ${balli[1][1]} </div>
                        <div class="block_balli_col_text" date="5"> ${balli[2][1]} </div>
                    </div>
                <div class="block_balli_col_but but" onclick="setSchetBall(1)"> <div>&#9660</div> </div>
            </div>
        </div>
    `
    blokBal.insertAdjacentHTML("beforeend", blockw);
    // добавляю обработчик по нажатию мыши 
    const blockBballi = document.querySelectorAll('.block_balli_col_blok')
    blockBballi.forEach(element => {
        element.addEventListener("mousedown", blockBballiDown);
        element.addEventListener("touchstart", blockBballiDown);
        element.addEventListener("mouseup", blockBballiUp);
        element.addEventListener("touchend", blockBballiUp);
        element.addEventListener("mousemove", blockBballiMove);
        element.addEventListener("touchmove", blockBballiMove);
    })
    
    //addEventListener("click", handler);
    setRezultatSumm()
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
    if (n.downRpizn) {
        console.log(n.xdown - e.offsetY)
        if (((n.xdown - e.offsetY) % 3) === 0 ) {    
            if ((n.xdown - e.offsetY)>0 ) {
                setSchetBall(1)
            } else { setSchetBall(-1)}
            n.xdown = e.offsetY
        }
    }
}
//вычисление массива для отрисовки блока установки результата
const calsBalli = function(a) {
    const r = []
    let schetR = ((a-1)<0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray].length-1 : a-1
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
             upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])
    
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][a][0],
                upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][a][1]])

    schetR = ((a+1)>upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1) ? 0:  a+1  
    r.push([upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][0],
        upragBalli[uprag.vibor[uprag.vkladka].uprag][uprag.vibor[uprag.vkladka].upragNumArray][schetR][1]])     
    
    uprag.vibor[uprag.vkladka].rezult = +r[1][1]
    
    return r
}
//обработка клика по стрелочкам в блоке выбора результатов
const setSchetBall = function(a) {
    //изменяем состояние счетчика вкладки
    uprag.vibor[uprag.vkladka].schetchik = 
        (uprag.vibor[uprag.vkladka].schetchik + a > upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1) ? 0 :
         ( (uprag.vibor[uprag.vkladka].schetchik + a < 0) ? upragBalli[uprag.vibor[uprag.vkladka].uprag][0].length-1 : 
         (uprag.vibor[uprag.vkladka].schetchik + a))
    // пересчитываем массив для отрисовки и обновляем блок выбора результатов
    let balli = calsBalli(uprag.vibor[uprag.vkladka].schetchik) 
    const ballText = document.querySelectorAll('.block_balli_col_text')
    for (let i = 0; i < 3; i++) {
        ballText[i].innerHTML = balli[i][0]
        ballText[i+3].innerHTML = balli[i][1]
    }
    setRezultatSumm()
}
// вычисление и вывод суммарного результа по всем упражнениям
const setRezultatSumm = function () {
    const vkladi =  document.querySelectorAll('.vkladi');
    let rezultatSumm = 0
    let thresholdLevel = false
    for (let i = 0; i < n.kolUprash  ; i++) {
        console.log(kategores[n.pol][n.vozrast].porog)
        console.log(uprag.vibor[i].rezult)
        if ((uprag.vibor[i].rezult < kategores[n.pol][n.vozrast].porog)&(uprag.vibor[i].rezult>0)) {
            thresholdLevel = true
            vkladi[i].classList.add("vkladiPorog") 
           
            console.log('ниже порога ')
            
        } else {
            console.log('выше порога')
            if (vkladi[i].classList.contains('vkladiPorog')) {vkladi[i].classList.remove('vkladiPorog')} 
        } 
       
        rezultatSumm = rezultatSumm + uprag.vibor[i].rezult
    }
   // console.log(n)
    console.log(kategores[n.pol][n.vozrast].estimation[n.kategor][(n.kolUprash-2)])
    const estimation = kategores[n.pol][n.vozrast].estimation[n.kategor][(n.kolUprash-2)]
    // console.log(kategores[n.pol].estimation[n.kategor][(n.kolUprash-1)])
    // kategores[n.pol].estimation[n.kategor][n.kolUprash-1]
    let rezultatEstimation = (rezultatSumm < estimation[0]) ? 'неудовлетворительно' :
        (rezultatSumm < estimation[1]) ? 'удовлетворительно' :
        (rezultatSumm < estimation[2]) ? 'хорошо' :
        (rezultatSumm < estimation[3]) ? 'отлично (3 уровень)' :
        (rezultatSumm < estimation[4]) ? 'отлично (2 уровень' :
        (rezultatSumm < estimation[5]) ? 'отлично (1 уровень)' : 'отлично (высший уровень)' 
    if (thresholdLevel) {rezultatEstimation = 'неудовлетворительно <br> (пороговый минимум)'}
    navigationRezult.innerHTML = (rezultatSumm === 0) ? '' : rezultatSumm
    navigationEstimation.innerHTML = (rezultatSumm === 0) ? '' : rezultatEstimation
}
//navigationRezult