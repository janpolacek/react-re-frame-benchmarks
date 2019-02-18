import React from 'react'
import * as reframe from 'nike-re-framejs';
const Pair = reframe.uix('Pair', {
    render() {
        const {sliceId, pairId} = this.props;
        const { direction = 'up' } = this.state;
        const pair = this.derefSub(['pair', sliceId, pairId]);

        return (
            <li className='list-group-item'>
                <span>{pair.get('name')}</span>
                <span className={'pull-right ' + (direction === 'up' ? 'text-success' : 'text-warning')}>
                    <span className={'glyphicon ' + (direction === 'up' ? 'glyphicon-arrow-up' : 'glyphicon-arrow-down')}></span>
                    <span>{pair.get('value')}</span>
                </span>
            </li>
        )
    }
});

export default Pair;
