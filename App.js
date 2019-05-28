import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { openPlace } from "./src/store/actions/index";
import { connect } from "react-redux";
import NativeTabs from "native-tabs";

class App extends Component {
    state = {
        activeTab: { id: 0 },
        items: [
            {
                id: 0,
                name: "lorem"
            },
            {
                id: 1,
                name: "ipsum"
            },
            {
                id: 2,
                name: "Kevin"
            },
            {
                id: 3,
                name: "Kevin"
            },
            {
                id: 4,
                name: "Kevin"
            },
            {
                id: 5,
                name: "Kevin"
            },
            {
                id: 6,
                name: "Kevin",
            }
        ]
    };

    callBackFunction = tab => {
        this.setState({
            activeTab: tab
		});
		
	};

	handleViews=()=>{
		if(this.state.activeTab.id === 1){
			return(
				<View>
					<Text>Here</Text>
				</View>
			)
		}
	}

    render() {
        return (
            <>
                <NativeTabs
                    tabs={this.state.items}
                    disable={true}
                    styles={{
                        wrap: styles.wrap,
                        tab: styles.tab,
                        tabText: styles.tabText,
                        underline: styles.underline,
                        activeTabText: styles.activeText
                    }}
                    activeTab={this.state.activeTab}
                    onTab={this.callBackFunction}
                />
				{this.handleViews()}
            </>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: "#fff"
    },
    tab: {
        flex: 1,
        alignItems: "center",
        padding: 16,
        paddingTop: 12,
        paddingBottom: 12
    },
    tabText: {
        width: "100%",
        textAlign: "center"
    },
    underline: {
        height: 3,
        backgroundColor: "transparent"
    },
    activeText: {
        color: "red"
    }
});

const mapStateTopProps = state => {
    return {
        open: state.places.open
    };
};

const mapDispatchTopProps = dispatch => {
    return {
        onPressOpen: () => dispatch(openPlace())
    };
};

export default connect(
    mapStateTopProps,
    mapDispatchTopProps
)(App);
