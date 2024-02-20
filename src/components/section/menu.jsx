export default function Menu({newGame, shuffle, next}){
        return (
            <div className = 'menu'>
                <button onClick={newGame}>New Game</button>
                <br/>
                <button onClick={next}>Next Card</button>
                <button onClick={shuffle}>Reshuffle</button>
                <div className='links'>
                Scoresheets available here:
                <ul>
                    <li><a href='https://play.google.com/store/apps/details?id=com.bluecocker.welcome' target="_blank" rel="noopener noreferrer">Google Play</a></li>
                    <li><a href='https://apps.apple.com/us/app/welcome-to-your-perfect-place/id1358077007' target="_blank" rel="noopener noreferrer">Apple Store</a></li>
                    {/* <li><a href='https://s3.amazonaws.com/geekdo-files.com/bgg264624?response-content-disposition=inline%3B%20filename%3D%22Welcome_To_Fillable_Sheet_PDF_v2.0.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20200403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200403T215606Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=5fd74b9f08a1311ac83278968343f1d2b81dd5502ec2e5d9cbbc6d2d10ee5ccd' target="_blank" rel="noopener noreferrer">Color Download (Interactive File)</a></li>
                    <li><a href='https://s3.amazonaws.com/geekdo-files.com/bgg203807?response-content-disposition=inline%3B%20filename%3D%22Feuille_score.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20200403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200403T215543Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=915bc9af7e0c9759b4a006c49b0798a6c9dbd8e18e238af174921f348c4b1192' target="_blank" rel="noopener noreferrer">Color Download (To Print)</a></li>
                    <li><a href='https://s3.amazonaws.com/geekdo-files.com/bgg242382?response-content-disposition=inline%3B%20filename%3D%22WelcomeToSheet-2up-LowInk.pdf%22&response-content-type=application%2Fpdf&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJYFNCT7FKCE4O6TA%2F20200403%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200403T215423Z&X-Amz-SignedHeaders=host&X-Amz-Expires=120&X-Amz-Signature=7af5cac27e0b1200b91b0c7b6917678c5166b2db26eec88deb1aa42e0c1d37eb' target="_blank" rel="noopener noreferrer">B&W Download (To print)</a></li> */}

                </ul>
                </div>
            </div>
        )
}
