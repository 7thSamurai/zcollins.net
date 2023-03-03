import React from 'react'
import { Service, Heading } from '@/src/components';

function DatabaseDesign() {
  return (
    <Service title='Database Design' meta='Freelance Software Developer offering custom database design and implementation services for business applications.'>
      <p className='py-2'>
        In this modern high-tech age, business heavily rely on using computers running database software for storing, organizing, and processing vast amounts of data to keep their operations running.
      </p>
      <p className='py-2'>
        My services include <i>designing</i>, <i>implementing</i>, <i>maintaining</i>, and <i>analyzing</i> databases, whether starting from scratch, or modifying an existing database, I have the skills and knowledge to get the job done!
      </p>

      <Heading.H2 className='my-8'>Service Breakdown</Heading.H2>

      <Heading.H3 className='my-2'>Software Selection</Heading.H3>
      <p className='py-2'>
        There are many database systems available, such as <a className='hover:text-black hover:underline font-bold' href='https://www.mysql.com/'>Oracle&apos;s MySQL</a> or <a className='hover:text-black hover:underline font-bold' href='https://www.microsoft.com/en-us/sql-server'>Microsoft&apos;s SQL Server</a>, but the exact system your business requires will depend on your unique requirements and use cases.
        As part of my services I will discuss with you your requirements and assisting you with determining the type and the exact variety of database which is best suited for your specific needs, whether it&apos;s a traditional <b>Relational Database Management System</b> (<b>RDBMS</b>), or a more recent <b>Non-Relational</b> (<b>NoSQL</b>) database.
      </p>

      <p>Some examples of relational databases that I can help you with are:</p>
      <ul className='list-disc ml-8 pb-2'>
        <li><a className='hover:text-black hover:underline' href='https://www.mysql.com/'>MySQL</a></li>
        <li><a className='hover:text-black hover:underline' href='https://www.microsoft.com/en-us/sql-server'>Microsoft SQL Server</a></li>
        <li><a className='hover:text-black hover:underline' href='https://www.postgresql.org/'>PostgreSQL</a></li>
        <li><a className='hover:text-black hover:underline' href='https://mariadb.com/'>MariaDB</a></li>
      </ul>

      <p>And some examples of non-relational databases are:</p>
      <ul className='list-disc ml-8 pb-2'>
        <li><a className='hover:text-black hover:underline' href='https://www.mongodb.com/'>MonogoDB</a></li>
        <li><a className='hover:text-black hover:underline' href='https://cassandra.apache.org/'>Cassandra</a></li>
        <li><a className='hover:text-black hover:underline' href='https://redis.io/'>Redis</a></li>
        <li><a className='hover:text-black hover:underline' href='https://neo4j.com/'>Neo4j</a></li>
      </ul>

      <Heading.H3 className='my-2'>Design</Heading.H3>
      <p className='py-2'>
        One we have selected a database, we may begin the design process. 
        Here I will work with to determine all the data that needs to be stored, and all the necessary relations that need to be created.
        With this knowledge I will then start working on designing the layout of how the information will actually be organized in the database.
      </p>
      <p className='py-2'>
        Additionally, I will discuss with you the various hosting options available, such as <a className='hover:text-black hover:underline font-bold' href='https://aws.amazon.com/'>Amazon's AWS</a> or <a className='hover:text-black hover:underline font-bold' href='https://azure.microsoft.com/'>Microsoft's Azure</a>, and which one best suites your needs and your budget.
      </p>

      <Heading.H3 className='my-2'>Implementation</Heading.H3>
      <p className='py-2'>
        After I've designed the database, I will help you setup any necessary hosting accounts, and get a database instance running.
        Then I will handle running all the necessary commands to start creating and populating the database tables.
      </p>
      <p className='py-2'>
        Additionally, if you already have some existing data, I will also clean, organize, and import it into the new system for you!
      </p>

      <Heading.H3 className='my-2'>Maintenance</Heading.H3>
      <p className='py-2'>
        My services also include modifying, debugging, and upgrading your existing database systems.
        If you have additional features that need added, bugs that need fixed, or if you even need to migrate your database to another hosting provider, I got you covered.
      </p>

      <Heading.H3 className='my-2'>Data Analyzation</Heading.H3>
      <p className='py-2'>
        As part of my services I will also assist you with data analysis.
        If you need to extract and analyze portions of your data, I can assist you by writing the necessary SQL query statements to select the data, and then further analyze and manipulate it by using technologies such as <b>Python</b> and <b>Pandas</b>.
      </p>
    </Service>
  );
}

export default DatabaseDesign;