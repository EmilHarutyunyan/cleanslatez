import Image from "next/image";
import Link from "next/link";
import Image2 from "../../../public/assets/images/medical.png";
import { DONATE_NOW } from "../router/routerPath";
import classes from "./ProgramsHeaderWrap.module.css";
const ProgramsHeaderWrap = ({ children }) => {
	return (
		<header className={classes.whole}>
			<div className={classes.main}>
				{children}
				<div className={classes.mainInside}>
					<div className={classes.inside}>
						<div className={classes.left}>
							<div className={classes.swiperDiv}>
								<Image className='imgSwiper' src={Image2} alt='medical' />
							</div>
							<Link className={classes.btnDonate} href={DONATE_NOW}>
								Donate Now
							</Link>
						</div>
						<div className={classes.middle}>
							<h1 className={classes.title}>Medical debt relief programs</h1>
							<div className={classes.text}>
								Our Application and Wholesale programs have the same high-level
								result of removing medical debt for qualified individuals
								through diverse approaches. We target all donations to be split
								equally between the programs. We strongly believe that offering
								both programs is the best approach to erasing medical debt as
								there is no one-size-fits-all approach to solving the US medical
								debt crisis.
							</div>
							<div className={classes.text}>
								Please consider donating today. While we encourage donors to
								donate with no requirements, we do allow donors to specify if
								they want their funds used for the Application or Wholesale
								Program.
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default ProgramsHeaderWrap;
