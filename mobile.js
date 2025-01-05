  const outputContainer = document.getElementById("output");

        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll("button").forEach(function(button) {
                button.addEventListener("click", function() {
                    const buttonId = button.getAttribute("id");
                    outputContainer.innerHTML = ""; // Clear previous output

                    switch (buttonId) {
                        case "device-model":
                            const deviceModel = navigator.userAgent.match(/\b(iPhone|iPad|iPod|Android|Windows Phone|BlackBerry|Opera Mini|IEMobile)\b/);
                            outputContainer.innerHTML = `Device Model: ${deviceModel ? deviceModel[0] : 'Unknown Device Model'}`;
                            break;
                        case "screen-size":
                            outputContainer.innerHTML = `Screen Size: ${screen.width} x ${screen.height} pixels`;
                            break;
                        case "browser-info":
                            outputContainer.innerHTML = `Browser Info: ${navigator.userAgent}`;
                            break;
                        case "battery-status":
                            if ('getBattery' in navigator) {
                                navigator.getBattery().then(function(battery) {
                                    const batteryLevel = (battery.level * 100).toFixed(0);
                                    const charging = battery.charging ? 'Charging' : 'Not Charging';
                                    outputContainer.innerHTML = `Battery Status: ${batteryLevel}%, ${charging}`;
                                });
                            } else {
                                outputContainer.innerHTML = 'Battery status information is unavailable in this browser.';
                            }
                            break;
                        case "os-info":
                            if (navigator.userAgentData) {
                                navigator.userAgentData.getHighEntropyValues(["platform"]).then(ua => {
                                    outputContainer.innerHTML = `OS Information: ${ua.platform}`;
                                });
                            } else {
                                outputContainer.innerHTML = `OS Information: ${navigator.platform}`;
                            }
                            break;
                        case "device-orientation":
                            outputContainer.innerHTML = window.DeviceOrientationEvent ? 
                                'DeviceOrientationEvent is supported in this browser.' : 
                                'DeviceOrientationEvent is not supported in this browser.';
                            break;
                        case "device-motion":
                            outputContainer.innerHTML = window.DeviceMotionEvent ? 
                                'DeviceMotionEvent is supported in this browser.' : 
                                'DeviceMotionEvent is not supported in this browser.';
                            break;
                        case "geolocation":
                            if (navigator.geolocation) {
                                outputContainer.innerHTML = 'Geolocation is supported in this browser.';
                            } else {
                                outputContainer.innerHTML = 'Geolocation is not supported in this browser.';
                            }
                            break;
                        case "proximity-sensor":
                            outputContainer.innerHTML = window.DeviceProximityEvent ? 
                                'DeviceProximityEvent is supported in this browser.' : 
                                'DeviceProximityEvent is not supported in this browser.';
                            break;
                        case "network-info":
                            if (navigator.connection) {
                                const connectionType = navigator.connection.effectiveType || 'Unknown';
                                outputContainer.innerHTML = `Network Type: ${connectionType}`;
                            } else {
                                outputContainer.innerHTML = 'Network information is not available in this browser.';
                            }
                            break;
                        case "device-memory":
                            if (navigator.deviceMemory) {
                                outputContainer.innerHTML = `Device Memory: ${navigator.deviceMemory} GB`;
                            } else {
                                outputContainer.innerHTML = 'Device memory information is not available in this browser.';
                            }
                            break;
                        case "media-capabilities":
                            const mediaCapabilities = navigator.mediaCapabilities || { supports: { audio: 'unknown', video: 'unknown' } };
                            outputContainer.innerHTML = `
                                Media Capabilities: 
                                <br> Audio: ${mediaCapabilities.supports.audio} 
                                <br> Video: ${mediaCapabilities.supports.video}
                            `;
                            break;
                        default:
                            outputContainer.innerHTML = 'Unknown action(s).';
                    }
                });
            });
        });


