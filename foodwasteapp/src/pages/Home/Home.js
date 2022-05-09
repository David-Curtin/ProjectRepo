import './Home.css'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nulla eu 
          malesuada laoreet. Sed vitae metus eget nunc dapibus rhoncus id vel risus. Fusce convallis 
          Praesent volutpat arcu elementum augue placerat porta. Nam finibus massa sed ipsum varius condimentum. 
          Vestibulum elementum blandit risus, ultrices placerat est interdum et. Nulla ac placerat turpis, id elementum 
          diam. Donec eu urna purus. Nam consequat ipsum ac luctus rhoncus. Donec rhoncus hendrerit mi id tincidunt. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ullamcorper 
          purus a quam gravida pulvinar. In hac habitasse platea dictumst. Mauris porttitor, nulla vitae lobortis sagittis, 
          arcu est ullamcorper risus, et dictum nibh orci sit amet libero. Ut in vehicula orci. Donec ac sagittis nunc, 
          sagittis viverra mi. Suspendisse scelerisque augue at tellus viverra, eu tincidunt neque luctus. Sed eget ornare felis.
        </p> 

        <form className="form">
          <p>Sign Up here!</p>
          <button className="button" href="/Signup">Sign up</button>
          <p></p>
          <p></p>
          <p>Or, if you already have an account, you can login here.</p>
          <button className="button" href="/Login">Login</button>
        </form>
    </div>
  )
}
