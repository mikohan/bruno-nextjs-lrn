import { NextPageContext } from 'next';
import { __appUrl__ } from '~/config';
import { getAuthStuff } from '~/helpers';

export default function People(props: any) {
  const { people } = props;
  return (
    <div>
      <h1>Page People</h1>
      <div>{JSON.stringify(people)}</div>
    </div>
  );
}

People.getInitialProps = async function (context: NextPageContext) {
  const people = await getAuthStuff(`${__appUrl__}/api/people`, context);
  return { people: people };
};
