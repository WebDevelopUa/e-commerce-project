import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import {Homepage} from "../../pages/home/Homepage";
import ShopPage from "../../pages/shop/ShopPage";
import Header from "../header/Header";
import {SignInUp} from "../../pages/sign-in-up/SignInUp";
import {ContactPage} from "../../pages/contact/ContactPage";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "../../redux/user/userActions";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "../../pages/checkout/CheckoutPage";
import {selectCurrentUser} from "../../redux/user/userSelectors";

class App extends Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth)
                    userRef.onSnapshot(snapshot => console.log(snapshot.data()))
                    userRef.onSnapshot(snapshot => setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }))
                } else {
                    setCurrentUser(userAuth)
                }
            }
        );
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route exact path="/signin"
                               render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInUp/>}/>
                        <Route exact path="/checkout" component={CheckoutPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)