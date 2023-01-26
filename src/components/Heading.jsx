import React from 'react'

function Heading({children, size, className}) {
  switch (size) {
    case 'H1': return (<h1 className={`font-redhat font-bold text-5xl md:text-6xl ${className }`}>{children}</h1>);
    case 'H2': return (<h2 className={`font-redhat font-bold text-4xl md:text-5xl ${className }`}>{children}</h2>);
    case 'H3': return (<h3 className={`font-redhat font-bold text-2xl md:text-3xl ${className }`}>{children}</h3>);
    default:
  }
}

Heading.H1 = props => <Heading {...props} size='H1'/>;
Heading.H2 = props => <Heading {...props} size='H2'/>;
Heading.H3 = props => <Heading {...props} size='H3'/>;

export default Heading