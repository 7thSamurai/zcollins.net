import React from 'react'
import { Service, Heading } from '@/src/components';

function DatabaseDesign() {
  return (
    <Service title='Database Design'>
      <p className='py-2'>
        In this modern high-tech age, business heavily rely on using computers for storing, organizing, and processing vast amounts of data to keep their operations running.
        Computers achieve this great technological feat by employing extremely complex and advance software systems known as databases.
        There are many such database systems available, such as <b>Oracle&apos;s MySQL</b> or <b>Microsoft&apos;s SQL Server</b>, but the exact system your business requires will depend on your unique requirements and use cases.
      </p>
      <p className='py-2'>
        If you are unsure what type of database system you need, or if you don&apos;t even know if it&apos;s possible accomplish your requirements, feel free to contact me so that we may discuss your situation and create a game plan that works with you!
      </p>

      <Heading.H2 className='my-4'>Relational Databases</Heading.H2>
      <p className='py-2'>
        One of the most widely used varieties of databases is known as a <b>Relational Database Management System</b> (<b>RDBMS</b>).
        These databases are designed to efficiently store data that is interconnected together in a relational manner.
        They also usually includes the ability to manipulate and access it&apos;s data via a special type of programming language known as <b>Structured Query Language</b> (<b>SQL</b>), hence the reason why many such systems have &quot;SQL&quot; in their name.
      </p>
      <p className='py-2'>
        Due to their highly robust and versatile nature, a SQL database will likely be the ideal choice for your situation and needs.
      </p>

      <p>A few of the most well known examples of relational databases are:</p>
      <ul className='list-disc ml-8 pb-2'>
        <li><a className='hover:text-black hover:underline' href='https://www.mysql.com/'>MySQL</a></li>
        <li><a className='hover:text-black hover:underline' href='https://www.microsoft.com/en-us/sql-server'>Microsoft SQL Server</a></li>
        <li><a className='hover:text-black hover:underline' href='https://www.postgresql.org/'>PostgreSQL</a></li>
        <li><a className='hover:text-black hover:underline' href='https://mariadb.com/'>MariaDB</a></li>
      </ul>

      <Heading.H2 className='my-4'>NoSQL Databases</Heading.H2>
      <p className='py-2'>
        <b>NoSQL</b> databases are a relatively recent creation that attempt to overcome some of the limitations and difficulties that come with traditional relational databases in certain situations.
        These non-relational databases are often referred to as &quot;NoSQL databases&quot; due to their absence of the SQL programming language previously mentioned.
      </p>
      <p className='py-2'>
        While not the correct substitute for all cases, NoSQL databases do pose a significant advantage over normal SQL databases in certain scenarios where there is a constant high-volume flow of non-interconnected data.
      </p>
      
      <p>Some of the most well known examples of non-relational databases are:</p>
      <ul className='list-disc ml-8 pb-2'>
        <li><a className='hover:text-black hover:underline' href='https://www.mongodb.com/'>MonogoDB</a></li>
        <li><a className='hover:text-black hover:underline' href='https://cassandra.apache.org/'>Cassandra</a></li>
        <li><a className='hover:text-black hover:underline' href='https://redis.io/'>Redis</a></li>
        <li><a className='hover:text-black hover:underline' href='https://neo4j.com/'>Neo4j</a></li>
      </ul>

      <Heading.H2 className='my-4'>Spreadsheet Migration</Heading.H2>
      <p className='py-2'>
        Many business rely on using spreadsheets for organizing and processing their data. 
        While this may work just fine at a small scale, when your operation grows and expands, the limitations and complications that come with this solution will quickly became apparent.
      </p>
      <p className='py-2'>
        To overcome these dilemmas, a database system can be employed to house your data instead.
        How you access this data is totally up to you, whether you want a custom desktop application, a web interface, or something else entirely, it&apos;s at your discretion.
        Your existing spreadsheet may also be easily imported and transferred to the new database without any loss of your current data and records.
      </p>
    </Service>
  );
}

export default DatabaseDesign;