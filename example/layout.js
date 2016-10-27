import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Layout')
  , code(
`.inline       { display:inline }
.block        { display:block }
.inline-block { display:inline-block }
.table        { display:table }
.table-cell   { display:table-cell }

.overflow-hidden { overflow:hidden }
.overflow-scroll { overflow:scroll }
.overflow-auto   { overflow:auto }

.clearfix:after { clear:both }
.clearfix:before,
.clearfix:after {
  content:" ";
  display:table
}

.left  { float:left }
.right { float:right }

.max-width-100  { max-width: 100px }
.max-width-200  { max-width: 200px }
.max-width-300  { max-width: 300px }
.max-width-400  { max-width: 400px }
.max-width-500  { max-width: 500px }
.max-width-600  { max-width: 600px }
.max-width-700  { max-width: 700px }
.max-width-full { max-width: 100% }

.width-100  { width: 100px }
.width-200  { width: 200px }
.width-300  { width: 300px }
.width-full { width: 100% }

.height-full { height: 100% }`, 'css')
  ])
  return section('layout', content)
}


