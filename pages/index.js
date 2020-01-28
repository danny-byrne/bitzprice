import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>  
    <div>
      <h1>Hello Welcome</h1>
      {/* {props.bpi.time.updated} */}
      <p>Check Current Bitcoin Rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  // console.log('index.getInitialProps returns ', data.bpi)
  // const { bpi } = data
  return {
    bpi: data.bpi
  }
}

export default Index;

//https://www.youtube.com/watch?v=IkOVe40Sy0U