import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: '/GN.PNG',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.genznodes.dev',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'https://testnet-explorer.genznodes.dev',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/genznodes',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/Genz22',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
