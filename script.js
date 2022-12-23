let json = JSON.parse(`[{"name":"JavaScript","year":"2012","quarter":"2","count":"105379"},{"name":"Python","year":"2012","quarter":"2","count":"99936"},{"name":"Ruby","year":"2012","quarter":"2","count":"92073"},{"name":"Java","year":"2012","quarter":"2","count":"70815"},{"name":"PHP","year":"2012","quarter":"2","count":"69346"},{"name":"C","year":"2012","quarter":"2","count":"58582"},{"name":"C++","year":"2012","quarter":"2","count":"54256"},{"name":"C#","year":"2012","quarter":"2","count":"13012"},{"name":"Shell","year":"2012","quarter":"2","count":"12882"},{"name":"Objective-C","year":"2012","quarter":"2","count":"11148"},{"name":"Perl","year":"2012","quarter":"2","count":"9761"},{"name":"Haskell","year":"2012","quarter":"2","count":"9335"},{"name":"HTML","year":"2012","quarter":"2","count":"9088"},{"name":"Scala","year":"2012","quarter":"2","count":"7531"},{"name":"CoffeeScript","year":"2012","quarter":"2","count":"7516"},{"name":"CSS","year":"2012","quarter":"2","count":"5905"},{"name":"Go","year":"2012","quarter":"2","count":"3835"},{"name":"Erlang","year":"2012","quarter":"2","count":"3445"},{"name":"Clojure","year":"2012","quarter":"2","count":"3227"},{"name":"VimL","year":"2012","quarter":"2","count":"3102"},{"name":"Emacs Lisp","year":"2012","quarter":"2","count":"2909"},{"name":"XSLT","year":"2012","quarter":"2","count":"2555"},{"name":"OCaml","year":"2012","quarter":"2","count":"2224"},{"name":"Lua","year":"2012","quarter":"2","count":"1881"},{"name":"Groovy","year":"2012","quarter":"2","count":"1395"},{"name":"Common Lisp","year":"2012","quarter":"2","count":"1284"},{"name":"Perl6","year":"2012","quarter":"2","count":"1240"},{"name":"Smalltalk","year":"2012","quarter":"2","count":"1109"},{"name":"TypeScript","year":"2012","quarter":"2","count":"1008"},{"name":"ActionScript","year":"2012","quarter":"2","count":"925"},{"name":"R","year":"2012","quarter":"2","count":"855"},{"name":"Vala","year":"2012","quarter":"2","count":"822"},{"name":"D","year":"2012","quarter":"2","count":"821"},{"name":"Matlab","year":"2012","quarter":"2","count":"818"},{"name":"Assembly","year":"2012","quarter":"2","count":"771"},{"name":"TeX","year":"2012","quarter":"2","count":"737"},{"name":"Puppet","year":"2012","quarter":"2","count":"723"},{"name":"ColdFusion","year":"2012","quarter":"2","count":"522"},{"name":"Makefile","year":"2012","quarter":"2","count":"412"},{"name":"Haxe","year":"2012","quarter":"2","count":"411"},{"name":"PLpgSQL","year":"2012","quarter":"2","count":"400"},{"name":"DCPU-16 ASM","year":"2012","quarter":"2","count":"399"},{"name":"FORTRAN","year":"2012","quarter":"2","count":"391"},{"name":"nesC","year":"2012","quarter":"2","count":"371"},{"name":"LiveScript","year":"2012","quarter":"2","count":"327"},{"name":"Tcl","year":"2012","quarter":"2","count":"313"},{"name":"Factor","year":"2012","quarter":"2","count":"310"},{"name":"Scheme","year":"2012","quarter":"2","count":"300"},{"name":"DM","year":"2012","quarter":"2","count":"300"},{"name":"Objective-J","year":"2012","quarter":"2","count":"297"},{"name":"Pascal","year":"2012","quarter":"2","count":"265"},{"name":"Rust","year":"2012","quarter":"2","count":"264"},{"name":"AGS Script","year":"2012","quarter":"2","count":"257"},{"name":"Mirah","year":"2012","quarter":"2","count":"242"},{"name":"Arduino","year":"2012","quarter":"2","count":"240"},{"name":"Dart","year":"2012","quarter":"2","count":"232"},{"name":"Web Ontology Language","year":"2012","quarter":"2","count":"223"},{"name":"Jupyter Notebook","year":"2012","quarter":"2","count":"219"},{"name":"OpenEdge ABL","year":"2012","quarter":"2","count":"213"},{"name":"AutoHotkey","year":"2012","quarter":"2","count":"209"},{"name":"Verilog","year":"2012","quarter":"2","count":"208"},{"name":"Racket","year":"2012","quarter":"2","count":"204"},{"name":"F#","year":"2012","quarter":"2","count":"203"},{"name":"Max","year":"2012","quarter":"2","count":"195"},{"name":"KiCad","year":"2012","quarter":"2","count":"194"},{"name":"CMake","year":"2012","quarter":"2","count":"178"},{"name":"PowerShell","year":"2012","quarter":"2","count":"168"},{"name":"Groff","year":"2012","quarter":"2","count":"168"},{"name":"Eagle","year":"2012","quarter":"2","count":"137"},{"name":"Agda","year":"2012","quarter":"2","count":"134"},{"name":"Fancy","year":"2012","quarter":"2","count":"130"},{"name":"Visual Basic","year":"2012","quarter":"2","count":"129"},{"name":"Ada","year":"2012","quarter":"2","count":"120"},{"name":"Cucumber","year":"2012","quarter":"2","count":"119"},{"name":"BitBake","year":"2012","quarter":"2","count":"109"},{"name":"VHDL","year":"2012","quarter":"2","count":"100"},{"name":"JavaScript","year":"2012","quarter":"3","count":"121271"},{"name":"Python","year":"2012","quarter":"3","count":"119659"},{"name":"Ruby","year":"2012","quarter":"3","count":"97509"},{"name":"PHP","year":"2012","quarter":"3","count":"81849"},{"name":"Java","year":"2012","quarter":"3","count":"78747"},{"name":"C","year":"2012","quarter":"3","count":"68478"},{"name":"C++","year":"2012","quarter":"3","count":"60314"},{"name":"Shell","year":"2012","quarter":"3","count":"16321"},{"name":"C#","year":"2012","quarter":"3","count":"16138"},{"name":"Objective-C","year":"2012","quarter":"3","count":"12020"},{"name":"HTML","year":"2012","quarter":"3","count":"11583"},{"name":"Haskell","year":"2012","quarter":"3","count":"10047"},{"name":"Perl","year":"2012","quarter":"3","count":"8535"},{"name":"CSS","year":"2012","quarter":"3","count":"7648"},{"name":"Scala","year":"2012","quarter":"3","count":"7402"},{"name":"Go","year":"2012","quarter":"3","count":"6963"},{"name":"CoffeeScript","year":"2012","quarter":"3","count":"6689"},{"name":"Erlang","year":"2012","quarter":"3","count":"3791"},{"name":"VimL","year":"2012","quarter":"3","count":"3702"},{"name":"Clojure","year":"2012","quarter":"3","count":"3470"},{"name":"Emacs Lisp","year":"2012","quarter":"3","count":"3424"},{"name":"Lua","year":"2012","quarter":"3","count":"3013"},{"name":"OCaml","year":"2012","quarter":"3","count":"2718"},{"name":"Groovy","year":"2012","quarter":"3","count":"2177"}]`)


class Select {
  constructor(param) {
    this.selector = document.querySelector(param.selector);
    this.label = param.label;
    this.url = param.url;
    this.onSelect = param.onSelect;


    //${json[0].name}
    this.selector.innerHTML = `
      <div class='select-body'>
        <div class='select-selected-body' selected=' '>
          <label class='select-placeholder'>${this.label}</label>
          <span class='select-selected'></span>
        </div>
        <i class='select-icon'></i>
      </div>
      <ul class='select-list'></ul>
    `

    this.selector.querySelector('.select-selected').onclick = this.openClose.bind(this)
    json.forEach(element => {
      this.selector.querySelector('.select-list').innerHTML += `<li class='select-variant'>${element.name}</li>`
    });
    this.selector.querySelector('.select-selected').style.height = this.selector.querySelector('.select-variant').offsetHeight + 'px'

    Array.from(this.selector.querySelectorAll('.select-variant')).forEach(element => {
      element.onclick = this.fcSelect.bind(this)
    })

  }
  openClose() {
    this.selector.classList.toggle('open')
  }
  open() {
    this.selector.classList.add('open')
  }
  close() {
    this.selector.classList.remove('open')
  }
  destroy() {
    this.selector.remove()
  }
  clear() {
    this.selector.querySelector('.select-selected').textContent = ''
    this.selector.querySelector('.select-selected-body').setAttribute('selected', ' ')
  }
  fcSelect() {
    let target = event.target
    this.selector.querySelector('.select-selected').textContent = target.textContent
    this.selector.querySelector('.select-selected-body').setAttribute('selected', target.textContent)
    this.selector.classList.remove('open')
  }
  selectByIndex(index) {
    this.selector.querySelector('.select-selected').textContent = this.selector.querySelectorAll('.select-variant')[index].textContent
    this.selector.classList.remove('open')
  }

}

const select = new Select({
  selector: '.select',
  label: 'Выбирете инструмент',
  url: 'https://gist.githubusercontent.com/calvinfroedge/defeb8fc6cdc0068e172/raw/7904b2504827f6f4883df0299a2bf51accbe9dab/languages.json',
  onSelect(selectedItem) {
    console.log(selectedItem)
  }
})

