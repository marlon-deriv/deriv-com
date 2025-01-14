import React from 'react'
import { marketItems } from './data'
import BottomNavItem from './bottom-nav.item'
import { container } from './styles.module.scss'

const MarketBottomNav = () => {
    return (
        <div className={container}>
            {marketItems.map((item) => (
                <BottomNavItem key={item.title} item={item} />
            ))}
        </div>
    )
}

export default MarketBottomNav
