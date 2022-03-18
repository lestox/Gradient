import React, {Component, useEffect, useState} from 'react'
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

export class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title : '',
            showPicker: false,
            color: {
                r: '225',
                g: '155',
                b: '99',
                a: '2',
            },
    }};

    onClick = () => {
        this.setState({
            showPicker: !this.state.showPicker
        })
    };

    onClose = () => {
        this.setState({
            showPicker: false
        })
    };

    onChange = (color) => {
        this.setState({
            color: color.rgb
        })
        console.log({color});
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '40px',
                    height: '15px',
                    borderRadius: '3px',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                },
                popover: {
                    position: 'absolute',
                    zIndex: '3',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
                swatch: {
                    padding: '6px',
                    background: '#ffffff',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
                },
            },
        });

        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className="card-text" style={ styles.swatch } onClick={ this.onClick }>
                            <div className="card-text" style={ styles.color } />
                        </div>
                        { this.state.showPicker ? <div style={ styles.popover }>
                            <div className="card-text" style={ styles.cover } onClick={ this.onClose }/>
                            <SketchPicker color={ this.state.color } onChange={ this.onChange } />
                        </div> : null }
                    </div>
                </div>
            </>
        )
    }
}


export default ColorPicker