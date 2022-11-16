import React from 'react'
import QRCode from 'qrcode'
import { useState } from 'react'

function QRGenerator() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 1000,
			margin: 0.5,
			color: {
				dark: '#000000FF',
				light: '#FFFFFFFF'
			}
		}, (err, url) => {
            if (err) return console.error(err)
            setQr(url)
		})
	}

	return (
		<div className="app">
			<h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
	)
}

export default QRGenerator;