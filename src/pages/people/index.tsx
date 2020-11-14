import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import { __appUrl__ } from '~/config';

export default function People(props: any) {
  return (
    <div>
      <h1>Page People</h1>
    </div>
  );
}

People.getInitialProps = async function (context: NextPageContext) {
  const response = await fetch(`${__appUrl__}/api/people`);
  const json = await response.json();
  return json;
};
