import React, {Component} from 'react';
import './Viewer.css'

class Viewer extends Component {

    /**
     * 책에 대한 정보를 load하고 epub.js를 이용해서, 그걸 그냥 보여주는 역할
     */

    render() {
        return(
            <div id="bookContent">
                <div >
                Antoine de Saint-Exupéry first published The Little Prince in 1943, only a year before his Lockheed P-38 vanished over the Mediterranean during a reconnaissance mission. More than a half century later, this fable of love and loneliness has lost none of its power. The narrator is a downed pilot in the Sahara Desert, frantically trying to repair his wrecked plane. His efforts are interrupted one day by the apparition of a little, well, prince, who asks him to draw a sheep. "In the face of an overpowering mystery, you don't dare disobey," the narrator recalls. "Absurd as it seemed, a thousand miles from all inhabited regions and in danger of death, I took a scrap of paper and a pen out of my pocket." And so begins their dialogue, which stretches the narrator's imagination in all sorts of surprising, childlike directions.
The Little Prince describes his journey from planet to planet, each tiny world populated by a single adult. It's a wonderfully inventive sequence, which evokes not only the great fairy tales but also such monuments of postmodern whimsy as Italo Calvino's Invisible Cities. And despite his tone of gentle bemusement, Saint-Exupéry pulls off some fine satiric touches, too. There's the king, for example, who commands the Little Prince to function as a one-man (or one-boy) judiciary:

I have good reason to believe that there is an old rat living somewhere on my planet. I hear him at night. You could judge that old rat. From time to time you will condemn him to death. That way his life will depend on your justice. But you'll pardon him each time for economy's sake. There's only one rat.
The author pokes similar fun at a businessman, a geographer, and a lamplighter, all of whom signify some futile aspect of adult existence. Yet his tale is ultimately a tender one--a heartfelt exposition of sadness and solitude, which never turns into Peter Pan-style treacle. Such delicacy of tone can present real headaches for a translator, and in her 1943 translation, Katherine Woods sometimes wandered off the mark, giving the text a slightly wooden or didactic accent. Happily, Richard Howard (who did a fine nip-and-tuck job on Stendhal's The Charterhouse of Parma in 1999) has streamlined and simplified to wonderful effect. The result is a new and improved version of an indestructible classic, which also restores the original artwork to full color. "Trying to be witty," we're told at one point, "leads to lying, more or less." But Saint-Exupéry's drawings offer a handy rebuttal: they're fresh, funny, and like the book itself, rigorously truthful. --James Marcus
                </div>
                <div id="page">
                    <p id="bookPagePrev">92/186</p>
                    <p id="bookPageBack">93/186</p>
                </div>

            </div>
        )
    }
}

export default Viewer;