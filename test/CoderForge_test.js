const CoderForge = artifacts.require('./CoderForge.sol')

contract('suite', accounts => {
  let cf

  before(() => {
    cf = CoderForge.deployed()
    return cf
  })

  it('will deploy', () => {
    return cf
  })

  it('will set owner', () => {
    return cf.then(cf => cf.owner()).then(owner => {
      assert.equal(owner, accounts[0])
    })
  })

  describe('#createForge', () => {
    it('will trigger newForge event', () =>
      new Promise(resolve => {
        cf.then(cf => {
          const event = cf.newForge((err, { args: { name, wallet } }) => {
            event.stopWatching()
            assert.equal(name, 'foo')
            assert.equal(wallet, '0x627306090abab3a6e1400e9345bc60c78a8bef57')
            resolve()
          })

          cf.createForge('foo', '0x627306090abab3a6e1400e9345bc60c78a8bef57')
        })
      }))
  })
})
