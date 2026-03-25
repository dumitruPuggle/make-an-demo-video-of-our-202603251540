import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

/* COMPONENT_REFERENCE_ID:60d9049c-9c1b-43c2-ad29-e43b6e8a8344 */

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

const ease = (frame: number, input: [number, number], output: [number, number]) =>
	interpolate(frame, input, output, {
		...clamp,
		easing: Easing.out(Easing.cubic),
	});

const PillIconDoc: React.FC<{color: string}> = ({color}) => (
	<div
		style={{
			width: 20,
			height: 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
			<rect x='3.5' y='3.5' width='13' height='13' rx='3' stroke={color} strokeWidth='2'/>
			<line x1='7' y1='8' x2='13' y2='8' stroke={color} strokeWidth='2' strokeLinecap='round'/>
			<line x1='7' y1='11' x2='11.5' y2='11' stroke={color} strokeWidth='2' strokeLinecap='round'/>
		</svg>
	</div>
);

const PillIconWrench: React.FC = () => (
	<div
		style={{
			width: 20,
			height: 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
			<path
				d='M11.8 4.2a4.3 4.3 0 0 0 1.1 4.2l-6.6 6.6a1.8 1.8 0 1 0 2.5 2.5l6.6-6.6a4.3 4.3 0 0 0 4.2-1.1 4 4 0 0 1-3.2-1.1A4 4 0 0 1 15.3 5a4.3 4.3 0 0 0-3.5-.8Z'
				stroke='#4B7EFF'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill='none'
			/>
			<circle cx='7.1' cy='14.8' r='0.9' fill='#4B7EFF' />
		</svg>
	</div>
);

const BuildAppsIcon: React.FC = () => (
	<div
		style={{
			width: 22,
			height: 22,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: 10,
		}}
	>
		<svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
			<rect x='2.5' y='3.5' width='13' height='13' rx='3' stroke='#6F7784' strokeWidth='1.9'/>
			<line x1='6' y1='8' x2='10.8' y2='8' stroke='#6F7784' strokeWidth='1.9' strokeLinecap='round'/>
			<line x1='6' y1='11.2' x2='8.9' y2='11.2' stroke='#6F7784' strokeWidth='1.9' strokeLinecap='round'/>
			<path d='M16.8 9.5v6.7' stroke='#6F7784' strokeWidth='1.9' strokeLinecap='round'/>
			<path d='M13.45 12.85h6.7' stroke='#6F7784' strokeWidth='1.9' strokeLinecap='round'/>
		</svg>
	</div>
);

const PaperclipIcon: React.FC = () => (
	<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
		<path
			d='M8 12.5l6.3-6.3a3.5 3.5 0 1 1 5 5l-8.6 8.6a5 5 0 1 1-7.1-7.1l8.8-8.8'
			stroke='#96A0AA'
			strokeWidth='2.2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const MicIcon: React.FC = () => (
	<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
		<rect x='9' y='4' width='6' height='10' rx='3' stroke='#96A0AA' strokeWidth='2.2'/>
		<path d='M6.5 11.5a5.5 5.5 0 0 0 11 0' stroke='#96A0AA' strokeWidth='2.2' strokeLinecap='round'/>
		<path d='M12 17v3' stroke='#96A0AA' strokeWidth='2.2' strokeLinecap='round'/>
		<path d='M9.2 20h5.6' stroke='#96A0AA' strokeWidth='2.2' strokeLinecap='round'/>
	</svg>
);

const SendIcon: React.FC = () => (
	<svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
		<circle cx='20' cy='20' r='18.5' fill='#88A8FF' />
		<path d='M20 28V12' stroke='white' strokeWidth='3.7' strokeLinecap='round'/>
		<path d='M12.7 19.3L20 12l7.3 7.3' stroke='white' strokeWidth='3.7' strokeLinecap='round' strokeLinejoin='round'/>
	</svg>
);

const SuggestionPill: React.FC<{
	label: string;
	type: 'doc' | 'wrench';
}> = ({label, type}) => (
	<div
		style={{
			height: 58,
			paddingLeft: 22,
			paddingRight: 24,
			borderRadius: 29,
			backgroundColor: 'rgba(255,255,255,0.96)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
			fontSize: 26,
			color: '#2F3742',
			fontWeight: 500,
			letterSpacing: '-0.02em',
			gap: 10,
		}}
	>
		{type === 'doc' ? <PillIconDoc color='#2ECB73' /> : <PillIconWrench />}
		<div>{label}</div>
	</div>
);

export const Scene01: React.FC = () => {
	const frame = useCurrentFrame();

	const sceneOpacity = ease(frame, [0, 10], [0, 1]);
	const cameraScale = interpolate(frame, [0, 90], [1.04, 1], clamp);
	const sceneBlur = interpolate(frame, [0, 16], [16, 0], clamp);
	const ambientGlow = interpolate(frame, [0, 24, 90], [0.42, 0.7, 0.62], clamp);

	const headlineOpacity = ease(frame, [2, 14], [0, 1]);
	const headlineY = interpolate(frame, [0, 16], [18, 0], clamp);
	const headlineBlur = interpolate(frame, [0, 16], [10, 0], clamp);

	const moduleOpacity = ease(frame, [8, 24], [0, 1]);
	const moduleScale = interpolate(frame, [8, 24, 34], [0.986, 1.01, 1], clamp);
	const moduleBlur = interpolate(frame, [8, 24], [18, 0], clamp);

	const row1Opacity = ease(frame, [18, 34], [0, 1]);
	const row1Y = interpolate(frame, [18, 34], [12, 0], clamp);
	const row1Scale = interpolate(frame, [18, 34], [0.992, 1], clamp);
	const row1Blur = interpolate(frame, [18, 34], [10, 0], clamp);

	const row2Opacity = ease(frame, [24, 42], [0, 1]);
	const row2Y = interpolate(frame, [24, 42], [12, 0], clamp);
	const row2Scale = interpolate(frame, [24, 42], [0.992, 1], clamp);
	const row2Blur = interpolate(frame, [24, 42], [10, 0], clamp);

	return (
		<AbsoluteFill
			style={{
				fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
				background:
					'radial-gradient(1200px 500px at 50% 88%, rgba(255,214,74,0.22) 0%, rgba(255,214,74,0.08) 42%, rgba(255,255,255,0) 70%), linear-gradient(180deg, #F7EFE3 0%, #F8F4EC 28%, #FCFBF8 58%, #FEFEFD 100%)',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: -60,
					background:
						'repeating-linear-gradient(66deg, rgba(255,214,74,0.055) 0px, rgba(255,214,74,0.055) 34px, rgba(255,255,255,0) 34px, rgba(255,255,255,0) 80px)',
					opacity: 0.75,
					transform: 'scale(1.04)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: -120,
					background:
						'radial-gradient(900px 380px at 50% 70%, rgba(255,208,46,0.14) 0%, rgba(255,208,46,0.08) 35%, rgba(255,255,255,0) 70%)',
					opacity: ambientGlow,
					transform: 'scale(1.08)',
					filter: 'blur(8px)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					opacity: sceneOpacity,
					transform: `scale(${cameraScale})`,
					transformOrigin: 'center center',
					filter: `blur(${sceneBlur}px)`,
					backgroundColor: 'transparent',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: 288 + headlineY,
						left: 0,
						right: 0,
						textAlign: 'center',
						fontSize: 52,
						fontWeight: 700,
						color: '#141A22',
						letterSpacing: '-0.04em',
						opacity: headlineOpacity,
						filter: `blur(${headlineBlur}px)`,
					}}
				>
					How can I help?
				</div>

				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: 395,
						transform: `translateX(-50%) scale(${moduleScale})`,
						width: 1228,
						height: 198,
						backgroundColor: 'rgba(255,255,255,0.97)',
						borderRadius: 28,
						border: '2px solid rgba(210,215,222,0.9)',
						boxShadow: '0 10px 24px rgba(24,39,75,0.12), 0 2px 5px rgba(24,39,75,0.08)',
						opacity: moduleOpacity,
						filter: `blur(${moduleBlur}px)`,
					}}
				>
					<div
						style={{
							position: 'absolute',
							left: 28,
							top: 30,
							fontSize: 31,
							fontWeight: 400,
							color: '#6D7787',
							letterSpacing: '-0.03em',
						}}
					>
						Build an agent or perform a task
					</div>

					<div
						style={{
							position: 'absolute',
							left: 27,
							bottom: 30,
							height: 58,
							paddingLeft: 22,
							paddingRight: 28,
							borderRadius: 29,
							border: '2px solid #DDE1E7',
							display: 'flex',
							alignItems: 'center',
							backgroundColor: '#FEFEFE',
							color: '#202833',
							fontSize: 25,
							fontWeight: 500,
							letterSpacing: '-0.03em',
						}}
					>
						<BuildAppsIcon />
						Build apps
					</div>

					<div
						style={{
							position: 'absolute',
							right: 24,
							bottom: 26,
							display: 'flex',
							alignItems: 'center',
							gap: 22,
						}}
					>
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36}}>
							<PaperclipIcon />
						</div>
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36}}>
							<MicIcon />
						</div>
						<div style={{marginLeft: 10}}>
							<SendIcon />
						</div>
					</div>
				</div>

				<div
					style={{
						position: 'absolute',
						top: 634,
						left: '50%',
						transform: 'translateX(-50%)',
						width: 1260,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 16,
						backgroundColor: 'transparent',
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: 12,
							alignItems: 'center',
							justifyContent: 'center',
							opacity: row1Opacity,
							transform: `translateY(${row1Y}px) scale(${row1Scale})`,
							filter: `blur(${row1Blur}px)`,
						}}
					>
						<SuggestionPill label='Personal website' type='doc' />
						<SuggestionPill label='Customer support email' type='wrench' />
						<SuggestionPill label='Outbound sales calls' type='wrench' />
						<SuggestionPill label='Lead gen' type='doc' />
					</div>

					<div
						style={{
							display: 'flex',
							gap: 12,
							alignItems: 'center',
							justifyContent: 'center',
							opacity: row2Opacity,
							transform: `translateY(${row2Y}px) scale(${row2Scale})`,
							filter: `blur(${row2Blur}px)`,
						}}
					>
						<SuggestionPill label='Meeting recorder' type='wrench' />
						<SuggestionPill label='LinkedIn outreach' type='doc' />
						<SuggestionPill label='Support chatbot' type='wrench' />
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default Scene01;