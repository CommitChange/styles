import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Grid')
  , code(
`.col       { float: left }
.col-right { float: right }
.col-1  { width: 8.33333% }
.col-2  { width: 16.66667% }
.col-3  { width: 25% }
.col-4  { width: 33.33333% }
.col-5  { width: 41.66667% }
.col-6  { width: 50% }
.col-7  { width: 58.33333% }
.col-8  { width: 66.66667% }
.col-9  { width: 75% }
.col-10 { width: 83.33333% }
.col-11 { width: 91.66667% }
.col-12 { width: 100% }

@media (min-width: 480px){
  .sm-col       { float: left }
  .sm-col-right { float: right }
  .sm-col-1  { width: 8.33333% }
  etc...
}

@media (min-width: 780px){
  .md-col       { float: left }
  .md-col-right { float: right }
  .md-col-1 { width: 8.33333% }
  etc...
}

@media (min-width: 980px){
  .lg-col       { float: left }
  .lg-col-right { float: right }
  .lg-col-1  { width: 8.33333% }
  etc...
}`, 'css')
  ])
  return section('grid', content)
}

