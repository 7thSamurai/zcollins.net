import React from 'react'

class Heading extends React.Component {
  render() {
    switch (this.props.size) {
      case 'H1': return (<h1 className={`font-redhat font-bold text-5xl md:text-6xl ${this.props.className }`}>{this.props.children}</h1>);
      case 'H2': return (<h2 className={`font-redhat font-bold text-4xl md:text-5xl ${this.props.className }`}>{this.props.children}</h2>);
      case 'H3': return (<h3 className={`font-redhat font-bold text-2xl md:text-3xl ${this.props.className }`}>{this.props.children}</h3>);
      default:
    }
  }
}

Heading.H1 = props => <Heading {...props} size='H1'/>;
Heading.H2 = props => <Heading {...props} size='H2'/>;
Heading.H3 = props => <Heading {...props} size='H3'/>;

Heading.H1.displayName = `${Heading.name}.H1`;
Heading.H2.displayName = `${Heading.name}.H2`;
Heading.H3.displayName = `${Heading.name}.H3`;

export default Heading;