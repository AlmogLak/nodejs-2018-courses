import * as React from 'react';

interface LoaderProps {
    value: number;
    target: number;
}

class Loader extends React.Component<LoaderProps> {
    render() {
        const percentage = (Math.min(this.props.value / this.props.target * 100, 100)).toFixed(2);
        return (
            <div style={{ position: 'relative', height: '10px' }}>
                <span
                    style={{
                        position: 'absolute',
                        height: '10px',
                        width: '100%',
                        background: '#f1de7c'
                    }}
                />
                <span
                    style={{
                        position: 'absolute',
                        height: '10px',
                        width: percentage + '%',
                        background: '#9a84af'
                    }}
                />
            </div>
        );
    }
}

export default Loader;