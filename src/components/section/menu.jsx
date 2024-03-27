export default function Menu({newGame, shuffle, next, active}){
        return (
            <div className = 'menu'>
                <button onClick={newGame}>New Game</button>
                <button disabled={!active} onClick={()=>{next();}}>Next Card</button>
                <button disabled={!active} onClick={shuffle}>Reshuffle</button>
                <div className='links'>
                Scoresheets available here:
                <ul>
                    <li><a href='https://play.google.com/store/apps/details?id=com.bluecocker.welcome' target="_blank" rel="noopener noreferrer">Google Play</a></li>
                    <li><a href='https://apps.apple.com/us/app/welcome-to-your-perfect-place/id1358077007' target="_blank" rel="noopener noreferrer">Apple Store</a></li>

                </ul>
                </div>
            </div>
        )
}
